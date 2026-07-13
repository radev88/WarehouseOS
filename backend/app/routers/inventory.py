from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session, joinedload

from app.database import get_db
from app.models.inventory import Inventory
from app.schemas.inventory import InventoryResponse


router = APIRouter(
    prefix="/inventory",
    tags=["Inventory"]
)


@router.get(
    "/",
    response_model=list[InventoryResponse]
)
def get_inventory(
    db: Session = Depends(get_db)
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

        inventory.append(
            {
                "sku": item.product.sku,
                "product": item.product.name,
                "warehouse": item.location.warehouse.name,
                "location": item.location.code,
                "quantity": item.quantity
            }
        )

    return inventory