from pydantic import BaseModel


class InventoryResponse(BaseModel):

    sku: str
    product: str
    warehouse: str
    location: str
    quantity: int
    status: str