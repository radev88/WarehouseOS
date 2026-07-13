from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session, joinedload

from app.database import get_db
from app.models.transactions import Transaction


router = APIRouter(
    prefix="/transactions",
    tags=["Transactions"]
)


@router.get("/")
def get_transactions(
    db: Session = Depends(get_db)
):

    results = (
        db.query(Transaction)
        .options(
            joinedload(Transaction.product)
        )
        .all()
    )


    transactions = []


    for item in results:

        transactions.append(
            {
                "id": item.id,
                "type": item.type,
                "product": item.product.name,
                "quantity": item.quantity,
                "date": item.created_at.strftime("%m/%d/%Y")
            }
        )


    return transactions