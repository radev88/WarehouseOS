from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session, joinedload

from app.database import get_db
from app.models.inventory import Inventory


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
            joinedload(Inventory.location)
        )
        .all()
    )


    total_units = sum(
        item.quantity
        for item in inventory
    )


    total_skus = len(inventory)


    low_stock = len([
        item
        for item in inventory
        if item.quantity < 100
    ])


    warehouses = len({
        item.location.warehouse.name
        for item in inventory
    })


    available = len([
        item
        for item in inventory
        if item.quantity >= 100
    ])


    out_of_stock = len([
        item
        for item in inventory
        if item.quantity == 0
    ])


    return {

        "total_units": total_units,
        "total_skus": total_skus,
        "low_stock": low_stock,
        "warehouses": warehouses,

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
            },

            {
                "label": "Warehouses",
                "count": warehouses
            }

        ]

    }