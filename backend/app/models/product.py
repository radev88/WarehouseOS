from sqlalchemy import Column, Integer, String, Numeric
from app.database import Base
from sqlalchemy.orm import relationship


class Product(Base):

    __tablename__ = "products"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    sku = Column(
        String,
        unique=True,
        index=True
    )

    name = Column(
        String
    )

    category = Column(
        String
    )

    unit_cost = Column(
        Numeric
    )
    inventory = relationship(
    "Inventory",
    back_populates="product"
)