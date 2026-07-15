from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session, joinedload
from sqlalchemy import func

from app.database import get_db

from app.models.sales_order import (
    SalesOrder,
    SalesOrderItem
)

from app.models.customer import Customer
from app.models.product import Product
from app.models.inventory import Inventory
from app.models.transactions import Transaction

from app.schemas.sales_order import (
    SalesOrderCreate,
    SalesOrderResponse
)


router = APIRouter(
    prefix="/sales-orders",
    tags=["Sales Orders"]
)



@router.get(
    "/summary"
)
def sales_order_summary(
    db: Session = Depends(get_db)
):

    open_orders = (
        db.query(SalesOrder)
        .filter(
            SalesOrder.status == "OPEN"
        )
        .count()
    )


    pending_shipment = (
        db.query(SalesOrder)
        .filter(
            SalesOrder.status == "READY TO SHIP"
        )
        .count()
    )


    customers = (
        db.query(Customer)
        .count()
    )


    return {

        "open_orders": open_orders,

        "pending_shipment": pending_shipment,

        "customers": customers

    }




@router.get(
    "/",
    response_model=list[SalesOrderResponse]
)
def get_sales_orders(
    db: Session = Depends(get_db)
):

    orders = (
        db.query(SalesOrder)
        .options(
            joinedload(SalesOrder.items),
            joinedload(SalesOrder.customer)
        )
        .all()
    )


    return orders





@router.get(
    "/{order_id}",
    response_model=SalesOrderResponse
)
def get_sales_order(
    order_id: int,
    db: Session = Depends(get_db)
):

    order = (
        db.query(SalesOrder)
        .options(
            joinedload(SalesOrder.items)
        )
        .filter(
            SalesOrder.id == order_id
        )
        .first()
    )


    if not order:

        raise HTTPException(
            status_code=404,
            detail="Sales order not found"
        )


    return order





@router.post(
    "/",
    response_model=SalesOrderResponse
)
def create_sales_order(
    data: SalesOrderCreate,
    db: Session = Depends(get_db)
):

    customer = (
        db.query(Customer)
        .filter(
            Customer.id == data.customer_id
        )
        .first()
    )


    if not customer:

        raise HTTPException(
            status_code=404,
            detail="Customer not found"
        )



    for item in data.items:

        product = (
            db.query(Product)
            .filter(
                Product.id == item.product_id
            )
            .first()
        )


        if not product:

            raise HTTPException(
                status_code=404,
                detail=f"Product {item.product_id} not found"
            )



    order = SalesOrder(

        customer_id=data.customer_id,

        status="OPEN"

    )


    db.add(order)

    db.commit()

    db.refresh(order)



    for item in data.items:

        order_item = SalesOrderItem(

            sales_order_id=order.id,

            product_id=item.product_id,

            quantity=item.quantity,

            picked_quantity=0

        )


        db.add(order_item)



    db.commit()

    db.refresh(order)


    return order





@router.post(
    "/{order_id}/pick"
)
def pick_sales_order(
    order_id: int,
    db: Session = Depends(get_db)
):

    order = (
        db.query(SalesOrder)
        .options(
            joinedload(SalesOrder.items)
        )
        .filter(
            SalesOrder.id == order_id
        )
        .first()
    )


    if not order:

        raise HTTPException(
            status_code=404,
            detail="Sales order not found"
        )



    if order.status == "FULFILLED":

        raise HTTPException(
            status_code=400,
            detail="Order already fulfilled"
        )



    for item in order.items:

        inventory = (
            db.query(Inventory)
            .filter(
                Inventory.product_id == item.product_id
            )
            .first()
        )


        if not inventory:

            raise HTTPException(
                status_code=400,
                detail=f"No inventory found for product {item.product_id}"
            )



        if inventory.quantity < item.quantity:

            raise HTTPException(
                status_code=400,
                detail=f"Insufficient inventory for product {item.product_id}. Available: {inventory.quantity}"
            )



    for item in order.items:

        item.picked_quantity = item.quantity



    order.status = "READY TO SHIP"


    db.commit()


    return {

        "message": "Sales order picked successfully",

        "sales_order_id": order.id,

        "status": order.status

    }





@router.post(
    "/{order_id}/fulfill"
)
def fulfill_sales_order(
    order_id: int,
    db: Session = Depends(get_db)
):

    order = (
        db.query(SalesOrder)
        .options(
            joinedload(SalesOrder.items)
        )
        .filter(
            SalesOrder.id == order_id
        )
        .first()
    )


    if not order:

        raise HTTPException(
            status_code=404,
            detail="Sales order not found"
        )



    if order.status == "FULFILLED":

        raise HTTPException(
            status_code=400,
            detail="Order already fulfilled"
        )



    for item in order.items:


        inventory = (
            db.query(Inventory)
            .filter(
                Inventory.product_id == item.product_id
            )
            .first()
        )


        if not inventory:

            raise HTTPException(
                status_code=400,
                detail=f"No inventory found for product {item.product_id}"
            )



        if inventory.quantity < item.quantity:

            raise HTTPException(
                status_code=400,
                detail=f"Insufficient inventory for product {item.product_id}. Available: {inventory.quantity}"
            )



    for item in order.items:


        inventory = (
            db.query(Inventory)
            .filter(
                Inventory.product_id == item.product_id
            )
            .first()
        )


        inventory.quantity -= item.quantity



        transaction = Transaction(

            product_id=item.product_id,

            from_location_id=inventory.location_id,

            to_location_id=None,

            type="SHIPMENT",

            quantity=item.quantity

        )


        db.add(transaction)



    order.status = "FULFILLED"



    db.commit()


    return {

        "message": "Sales order fulfilled",

        "sales_order_id": order.id,

        "status": order.status

    }