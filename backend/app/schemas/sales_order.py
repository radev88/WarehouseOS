from pydantic import BaseModel, ConfigDict
from datetime import datetime



class SalesOrderItemCreate(BaseModel):

    product_id: int
    quantity: int



class SalesOrderCreate(BaseModel):

    customer_id: int
    items: list[SalesOrderItemCreate]



class SalesOrderItemResponse(BaseModel):

    id: int
    product_id: int
    quantity: int


    model_config = ConfigDict(
        from_attributes=True
    )



class SalesOrderResponse(BaseModel):

    id: int
    customer_id: int
    status: str
    created_at: datetime
    items: list[SalesOrderItemResponse]


    model_config = ConfigDict(
        from_attributes=True
    )