from pydantic import BaseModel


class AdjustmentCreate(BaseModel):

    product_id: int
    location_id: int
    new_quantity: int
    reason: str