from pydantic import BaseModel, EmailStr


class UserCreate(BaseModel):

    username: str

    email: EmailStr

    password: str

    role: str = "Warehouse User"



class UserLogin(BaseModel):

    email: EmailStr

    password: str



class UserUpdate(BaseModel):

    username: str

    email: EmailStr

    role: str



class UserResponse(BaseModel):

    id: int

    username: str

    email: str

    role: str


    class Config:

        from_attributes = True



class Token(BaseModel):

    access_token: str

    token_type: str

    username: str

    email: str

    role: str