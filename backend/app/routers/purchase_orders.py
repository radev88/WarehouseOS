from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session, joinedload

from app.database import get_db

from app.models.purchase_order import (
    PurchaseOrder,
    PurchaseOrderItem
)

from app.schemas.purchase_order import PurchaseOrderCreate

from app.security.permissions import require_role


router = APIRouter(
    prefix="/purchase-orders",
    tags=["Purchase Orders"]
)



@router.get("/")
def get_purchase_orders(
    db: Session = Depends(get_db),
    current_user = Depends(
        require_role(
            [
                "Admin",
                "Manager",
                "Warehouse User"
            ]
        )
    )
):

    orders = (

        db.query(PurchaseOrder)

        .options(

            joinedload(
                PurchaseOrder.supplier
            ),

            joinedload(
                PurchaseOrder.items
            )

        )

        .order_by(
            PurchaseOrder.created_at.desc()
        )

        .all()

    )


    return [

        {
            "id": order.id,

            "supplier": (
                order.supplier.name
                if order.supplier
                else "Unknown"
            ),

            "supplier_id": order.supplier_id,

            "status": order.status,

            "items": len(order.items),

            "created_at": order.created_at

        }

        for order in orders

    ]



@router.post("/")
def create_purchase_order(
    data: PurchaseOrderCreate,
    db: Session = Depends(get_db),
    current_user = Depends(
        require_role(
            [
                "Admin",
                "Manager"
            ]
        )
    )
):

    purchase_order = PurchaseOrder(

        supplier_id=data.supplier_id,

        status="OPEN"

    )


    db.add(purchase_order)

    db.commit()

    db.refresh(purchase_order)



    for item in data.items:

        order_item = PurchaseOrderItem(

            purchase_order_id=purchase_order.id,

            product_id=item.product_id,

            quantity_ordered=item.quantity_ordered,

            quantity_received=0

        )


        db.add(order_item)



    db.commit()



    return {

        "message": "Purchase order created",

        "purchase_order_id": purchase_order.id,

        "created_by": current_user.email

    }