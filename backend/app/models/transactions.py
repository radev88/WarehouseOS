from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime

from app.database import Base


class Transaction(Base):

    __tablename__ = "transactions"


    id = Column(
        Integer,
        primary_key=True,
        index=True
    )


    product_id = Column(
        Integer,
        ForeignKey("products.id")
    )


    from_location_id = Column(
        Integer,
        ForeignKey("locations.id"),
        nullable=True
    )


    to_location_id = Column(
        Integer,
        ForeignKey("locations.id"),
        nullable=True
    )


    type = Column(
        String
    )


    quantity = Column(
        Integer
    )


    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )


    product = relationship(
        "Product"
    )


    from_location = relationship(
        "Location",
        foreign_keys=[from_location_id]
    )


    to_location = relationship(
        "Location",
        foreign_keys=[to_location_id]
    )