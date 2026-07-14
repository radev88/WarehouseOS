from sqlalchemy import Column, Integer, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime

from app.database import Base


class Inventory(Base):

    __tablename__ = "inventory"


    id = Column(
        Integer,
        primary_key=True
    )


    product_id = Column(
        Integer,
        ForeignKey("products.id")
    )


    location_id = Column(
        Integer,
        ForeignKey("locations.id")
    )


    quantity = Column(
        Integer
    )


    updated_at = Column(
        DateTime,
        default=datetime.utcnow
    )


    product = relationship(
        "Product",
        back_populates="inventory"
    )


    location = relationship(
        "Location"
    )