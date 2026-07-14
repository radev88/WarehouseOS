from pydantic import BaseModel


class ShipmentCreate(BaseModel):
    product_id: int
    location_id: int
    quantity: int
    destination: str