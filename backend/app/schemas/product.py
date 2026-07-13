from pydantic import BaseModel


class ProductResponse(BaseModel):

    id: int
    sku: str
    name: str
    category: str
    unit_cost: float


    class Config:
        from_attributes = True