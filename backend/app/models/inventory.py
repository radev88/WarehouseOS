from sqlalchemy import Column, Integer, ForeignKey, DateTime
from sqlalchemy.orm import relationship
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
        DateTime
    )


    product = relationship(
        "Product",
        back_populates="inventory"
    )


    location = relationship(
        "Location"
    )