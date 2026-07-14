from pydantic import BaseModel


class PurchaseOrderItemCreate(BaseModel):

    product_id: int

    quantity_ordered: int



class PurchaseOrderCreate(BaseModel):

    supplier_id: int

    items: list[PurchaseOrderItemCreate]