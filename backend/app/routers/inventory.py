from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session, joinedload

from app.database import get_db
from app.models.inventory import Inventory
from app.schemas.inventory import InventoryResponse

from app.security.dependencies import get_current_user


router = APIRouter(
    prefix="/inventory",
    tags=["Inventory"]
)


@router.get(
    "/",
    response_model=list[InventoryResponse]
)
def get_inventory(
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):

    results = (
        db.query(Inventory)
        .options(
            joinedload(Inventory.product),
            joinedload(Inventory.location)
        )
        .all()
    )

    inventory = []

    for item in results:

        if item.quantity == 0:
            status = "Out of Stock"

        elif item.quantity < 100:
            status = "Low Stock"

        else:
            status = "Available"


        inventory.append(
            {
                "sku": item.product.sku,
                "product": item.product.name,
                "warehouse": item.location.warehouse.name,
                "location": item.location.code,
                "quantity": item.quantity,
                "status": status
            }
        )

    return inventory



@router.get("/status-summary")
def get_inventory_status_summary(
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):

    results = db.query(Inventory).all()


    available = 0
    low_stock = 0
    out_of_stock = 0


    for item in results:

        if item.quantity == 0:
            out_of_stock += 1
    
        elif item.quantity < 100:
            low_stock += 1

        else:
            available += 1


    return {
        "available": available,
        "low_stock": low_stock,
        "out_of_stock": out_of_stock
    }