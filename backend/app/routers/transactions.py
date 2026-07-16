from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session, joinedload

from app.database import get_db

from app.models.transactions import Transaction

from app.security.dependencies import get_current_user


router = APIRouter(
    prefix="/transactions",
    tags=["Transactions"]
)


@router.get("/")
def get_transactions(
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):

    results = (
        db.query(Transaction)
        .options(
            joinedload(Transaction.product),
            joinedload(Transaction.from_location),
            joinedload(Transaction.to_location)
        )
        .order_by(Transaction.created_at.desc())
        .all()
    )


    transactions = []


    for item in results:

        transactions.append(
            {
                "id": item.id,
                "type": item.type,
                "product": (
                    item.product.name
                    if item.product
                    else None
                ),
                "quantity": item.quantity,
                "from_location": (
                    item.from_location.code
                    if item.from_location
                    else None
                ),
                "to_location": (
                    item.to_location.code
                    if item.to_location
                    else None
                ),
                "date": (
                    item.created_at.strftime("%m/%d/%Y")
                    if item.created_at
                    else None
                )
            }
        )


    return transactions