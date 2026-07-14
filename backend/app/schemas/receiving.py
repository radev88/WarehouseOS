from pydantic import BaseModel



class ReceivingItem(BaseModel):

    product_id: int

    quantity_received: int



class ReceivingCreate(BaseModel):

    purchase_order_id: int

    location_id: int

    items: list[ReceivingItem]