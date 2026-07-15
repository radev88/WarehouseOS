from pydantic import BaseModel


class SupplierCreate(BaseModel):

    name: str
    contact: str
    email: str
    phone: str
    city: str
    state: str