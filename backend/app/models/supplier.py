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
        String,
        nullable=False
    )

    contact = Column(
        String
    )

    email = Column(
        String
    )

    phone = Column(
        String
    )

    city = Column(
        String
    )

    state = Column(
        String
    )

    purchase_orders = relationship(
        "PurchaseOrder",
        back_populates="supplier"
    )