from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.product import Product
from app.schemas.product import ProductResponse

from app.security.dependencies import get_current_user


router = APIRouter(
    prefix="/products",
    tags=["Products"]
)


@router.get(
    "/",
    response_model=list[ProductResponse]
)
def get_products(
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):

    products = db.query(Product).all()

    return products