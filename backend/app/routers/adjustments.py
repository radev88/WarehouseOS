from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db

from app.models.inventory import Inventory
from app.models.adjustments import Adjustment
from app.models.transactions import Transaction

from app.schemas.adjustments import AdjustmentCreate

from app.security.permissions import require_role


router = APIRouter(
    prefix="/adjustments",
    tags=["Adjustments"]
)


@router.post("/")
def create_adjustment(
    adjustment: AdjustmentCreate,
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

    inventory = (
        db.query(Inventory)
        .filter(
            Inventory.product_id == adjustment.product_id,
            Inventory.location_id == adjustment.location_id
        )
        .first()
    )


    if not inventory:

        raise HTTPException(
            status_code=404,
            detail="Inventory record not found"
        )



    if adjustment.new_quantity < 0:

        raise HTTPException(
            status_code=400,
            detail="Quantity cannot be negative"
        )



    previous_quantity = inventory.quantity



    inventory.quantity = adjustment.new_quantity



    adjustment_record = Adjustment(

        product_id=adjustment.product_id,

        location_id=adjustment.location_id,

        previous_quantity=previous_quantity,

        new_quantity=adjustment.new_quantity,

        reason=adjustment.reason

    )



    quantity_change = (
        adjustment.new_quantity - previous_quantity
    )



    transaction = Transaction(

        product_id=adjustment.product_id,

        from_location_id=adjustment.location_id,

        to_location_id=adjustment.location_id,

        type="ADJUSTMENT",

        quantity=quantity_change

    )



    db.add(adjustment_record)

    db.add(transaction)


    db.commit()



    return {

        "message": "Inventory adjusted successfully",

        "previous_quantity": previous_quantity,

        "new_quantity": adjustment.new_quantity,

        "adjustment": quantity_change,

        "performed_by": current_user.email

    }