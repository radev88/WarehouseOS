from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db

from app.models.inventory import Inventory
from app.models.transactions import Transaction
from app.models.purchase_order import (
    PurchaseOrder,
    PurchaseOrderItem
)

from app.schemas.receiving import ReceivingCreate


router = APIRouter(
    prefix="/receiving",
    tags=["Receiving"]
)


@router.get("/")
def get_receiving_history(
    db: Session = Depends(get_db)
):

    orders = (
        db.query(PurchaseOrder)
        .all()
    )


    results = []


    for order in orders:

        results.append({

            "id": order.id,

            "purchase_order_id": order.id,

            "supplier": (
                order.supplier.name
                if order.supplier
                else "Unknown"
            ),

            "received_date": order.created_at,

            "items": len(order.items),

            "status": order.status

        })


    return results



@router.get("/summary")
def receiving_summary(
    db: Session = Depends(get_db)
):

    orders = (
        db.query(PurchaseOrder)
        .all()
    )


    open_receipts = 0

    pending_receipts = 0

    completed_receipts = 0



    for order in orders:

        if order.status in [
            "Open",
            "OPEN"
        ]:

            open_receipts += 1


        elif order.status == "PARTIALLY RECEIVED":

            pending_receipts += 1


        elif order.status == "COMPLETED":

            completed_receipts += 1



    return {

        "open_receipts": open_receipts,

        "pending_receipts": pending_receipts,

        "completed_receipts": completed_receipts

    }



@router.post("/")
def receive_inventory(
    receiving: ReceivingCreate,
    db: Session = Depends(get_db)
):

    purchase_order = (
        db.query(PurchaseOrder)
        .filter(
            PurchaseOrder.id ==
            receiving.purchase_order_id
        )
        .first()
    )


    if not purchase_order:

        raise HTTPException(
            status_code=404,
            detail="Purchase Order not found"
        )



    for item in receiving.items:


        purchase_item = (
            db.query(PurchaseOrderItem)
            .filter(
                PurchaseOrderItem.purchase_order_id ==
                receiving.purchase_order_id,

                PurchaseOrderItem.product_id ==
                item.product_id
            )
            .first()
        )


        if not purchase_item:

            raise HTTPException(
                status_code=404,
                detail="Product not found in purchase order"
            )



        inventory = (
            db.query(Inventory)
            .filter(
                Inventory.product_id ==
                item.product_id,

                Inventory.location_id ==
                receiving.location_id
            )
            .first()
        )



        if inventory:

            inventory.quantity += item.quantity_received


        else:

            inventory = Inventory(

                product_id=item.product_id,

                location_id=receiving.location_id,

                quantity=item.quantity_received

            )

            db.add(inventory)



        purchase_item.quantity_received += item.quantity_received



        transaction = Transaction(

            product_id=item.product_id,

            from_location_id=None,

            to_location_id=receiving.location_id,

            type="RECEIPT",

            quantity=item.quantity_received

        )


        db.add(transaction)



    all_received = all(

        item.quantity_received >=
        item.quantity_ordered

        for item in purchase_order.items

    )



    any_received = any(

        item.quantity_received > 0

        for item in purchase_order.items

    )



    if all_received:

        purchase_order.status = "COMPLETED"


    elif any_received:

        purchase_order.status = "PARTIALLY RECEIVED"


    else:

        purchase_order.status = "Open"



    db.commit()



    return {

        "message":
        "Inventory received successfully",

        "purchase_order_id":
        purchase_order.id,

        "status":
        purchase_order.status

    }