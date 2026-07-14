from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from app.database import Base


class Supplier(Base):

    __tablename__ = "suppliers"


    id = Column(
        Integer,
        primary_key=True,
        index=True
    )


    name = Column(
        String
    )


    contact = Column(
        String
    )


    email = Column(
        String
    )


    purchase_orders = relationship(
        "PurchaseOrder",
        back_populates="supplier"
    )