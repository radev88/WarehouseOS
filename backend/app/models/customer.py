from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from app.database import Base


class Customer(Base):

    __tablename__ = "customers"


    id = Column(
        Integer,
        primary_key=True,
        index=True
    )


    name = Column(
        String
    )


    email = Column(
        String
    )


    sales_orders = relationship(
        "SalesOrder",
        back_populates="customer"
    )