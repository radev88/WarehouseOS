from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db

from app.models.inventory import Inventory
from app.models.transactions import Transaction

from app.schemas.transfer import TransferCreate

from app.security.permissions import require_role


router = APIRouter(
    prefix="/transfers",
    tags=["Transfers"]
)



@router.post("/")
def transfer_inventory(
    transfer: TransferCreate,
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

    source = (

        db.query(Inventory)

        .filter(

            Inventory.product_id == transfer.product_id,

            Inventory.location_id == transfer.from_location_id

        )

        .first()

    )



    if not source:

        raise HTTPException(

            status_code=404,

            detail="Source inventory not found"

        )



    if source.quantity < transfer.quantity:

        raise HTTPException(

            status_code=400,

            detail="Insufficient inventory"

        )



    destination = (

        db.query(Inventory)

        .filter(

            Inventory.product_id == transfer.product_id,

            Inventory.location_id == transfer.to_location_id

        )

        .first()

    )



    source.quantity -= transfer.quantity



    if destination:

        destination.quantity += transfer.quantity


    else:

        destination = Inventory(

            product_id=transfer.product_id,

            location_id=transfer.to_location_id,

            quantity=transfer.quantity

        )

        db.add(destination)



    transaction = Transaction(

        product_id=transfer.product_id,

        from_location_id=transfer.from_location_id,

        to_location_id=transfer.to_location_id,

        type="TRANSFER",

        quantity=transfer.quantity

    )



    db.add(transaction)


    db.commit()



    return {

        "message": "Inventory transferred successfully",

        "transferred_by": current_user.email

    }