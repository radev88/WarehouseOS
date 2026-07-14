from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.location import Location


router = APIRouter(
    prefix="/locations",
    tags=["Locations"]
)


@router.get("/")
def get_locations(
    db: Session = Depends(get_db)
):

    locations = db.query(Location).all()

    return [
        {
            "id": location.id,
            "code": location.code,
            "warehouse_id": location.warehouse_id
        }
        for location in locations
    ]