from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db

from app.models.customer import Customer

from app.schemas.customer import (
    CustomerCreate,
    CustomerResponse
)


router = APIRouter(
    prefix="/customers",
    tags=["Customers"]
)



@router.get("/", response_model=list[CustomerResponse])
def get_customers(
    db: Session = Depends(get_db)
):

    customers = (
        db.query(Customer)
        .all()
    )


    return customers



@router.get("/{customer_id}", response_model=CustomerResponse)
def get_customer(
    customer_id: int,
    db: Session = Depends(get_db)
):

    customer = (
        db.query(Customer)
        .filter(
            Customer.id == customer_id
        )
        .first()
    )


    if not customer:

        raise HTTPException(
            status_code=404,
            detail="Customer not found"
        )


    return customer



@router.post("/", response_model=CustomerResponse)
def create_customer(
    customer: CustomerCreate,
    db: Session = Depends(get_db)
):

    new_customer = Customer(

        name=customer.name,

        contact=customer.contact,

        email=customer.email,

        phone=customer.phone,

        address=customer.address,

        city=customer.city,

        state=customer.state,

        zip_code=customer.zip_code

    )


    db.add(new_customer)

    db.commit()

    db.refresh(new_customer)


    return new_customer



@router.put("/{customer_id}", response_model=CustomerResponse)
def update_customer(
    customer_id: int,
    data: CustomerCreate,
    db: Session = Depends(get_db)
):

    customer = (
        db.query(Customer)
        .filter(
            Customer.id == customer_id
        )
        .first()
    )


    if not customer:

        raise HTTPException(
            status_code=404,
            detail="Customer not found"
        )


    customer.name = data.name
    customer.contact = data.contact
    customer.email = data.email
    customer.phone = data.phone
    customer.address = data.address
    customer.city = data.city
    customer.state = data.state
    customer.zip_code = data.zip_code


    db.commit()

    db.refresh(customer)


    return customer



@router.delete("/{customer_id}")
def delete_customer(
    customer_id: int,
    db: Session = Depends(get_db)
):

    customer = (
        db.query(Customer)
        .filter(
            Customer.id == customer_id
        )
        .first()
    )


    if not customer:

        raise HTTPException(
            status_code=404,
            detail="Customer not found"
        )


    db.delete(customer)

    db.commit()


    return {

        "message": "Customer deleted"

    }