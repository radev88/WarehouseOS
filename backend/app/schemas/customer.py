from pydantic import BaseModel


class CustomerCreate(BaseModel):

    name: str
    contact: str | None = None
    email: str | None = None
    phone: str | None = None
    address: str | None = None
    city: str | None = None
    state: str | None = None
    zip_code: str | None = None



class CustomerResponse(BaseModel):

    id: int
    name: str
    contact: str | None
    email: str | None
    phone: str | None
    address: str | None
    city: str | None
    state: str | None
    zip_code: str | None


    class Config:
        from_attributes = True