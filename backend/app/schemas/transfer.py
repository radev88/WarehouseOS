from pydantic import BaseModel


class TransferCreate(BaseModel):

    product_id: int
    from_location_id: int
    to_location_id: int
    quantity: int