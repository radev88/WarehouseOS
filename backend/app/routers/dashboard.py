from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session, joinedload
from sqlalchemy import func
from datetime import datetime

from app.database import get_db

from app.models.inventory import Inventory
from app.models.transactions import Transaction


router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/summary")
def dashboard_summary(
    db: Session = Depends(get_db)
):

    inventory = (
        db.query(Inventory)
        .options(
            joinedload(Inventory.product),
            joinedload(Inventory.location)
        )
        .all()
    )


    total_units = sum(
        item.quantity
        for item in inventory
    )


    total_skus = len(inventory)


    inventory_value = sum(
        item.quantity * float(item.product.unit_cost)
        for item in inventory
        if item.product.unit_cost
    )


    low_stock = len([
        item
        for item in inventory
        if item.quantity < 100 and item.quantity > 0
    ])


    out_of_stock = len([
        item
        for item in inventory
        if item.quantity == 0
    ])


    available = len([
        item
        for item in inventory
        if item.quantity >= 100
    ])


    warehouses = len({
        item.location.warehouse.name
        for item in inventory
    })



    start_of_month = datetime.utcnow().replace(
        day=1,
        hour=0,
        minute=0,
        second=0,
        microsecond=0
    )


    receipts = (
        db.query(Transaction)
        .filter(
            Transaction.type == "RECEIPT",
            Transaction.created_at >= start_of_month
        )
        .count()
    )


    transfers = (
        db.query(Transaction)
        .filter(
            Transaction.type == "TRANSFER",
            Transaction.created_at >= start_of_month
        )
        .count()
    )


    adjustments = (
        db.query(Transaction)
        .filter(
            Transaction.type == "Adjustment",
            Transaction.created_at >= start_of_month
        )
        .count()
    )



    top_products = (
        db.query(
            Transaction.product_id,
            func.sum(Transaction.quantity).label("movement")
        )
        .group_by(
            Transaction.product_id
        )
        .order_by(
            func.sum(Transaction.quantity).desc()
        )
        .limit(5)
        .all()
    )


    top_movers = []


    for product_id, movement in top_products:

        product = (
            db.query(Transaction)
            .filter(
                Transaction.product_id == product_id
            )
            .first()
        )


        if product:

            top_movers.append(
                {
                    "product": product.product.name,
                    "movement": int(movement)
                }
            )



    return {

        "total_units": total_units,

        "total_skus": total_skus,

        "inventory_value": round(
            inventory_value,
            2
        ),

        "low_stock": low_stock,

        "out_of_stock": out_of_stock,

        "warehouses": warehouses,


        "monthly_activity": {

            "receipts": receipts,

            "transfers": transfers,

            "adjustments": adjustments

        },


        "top_movers": top_movers,


        "inventoryStatus": [

            {
                "label": "Available",
                "count": available
            },

            {
                "label": "Low Stock",
                "count": low_stock
            },

            {
                "label": "Out of Stock",
                "count": out_of_stock
            }

        ]

    }