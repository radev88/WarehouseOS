from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime

from app.database import Base


class Shipment(Base):

    __tablename__ = "shipments"

    id = Column(Integer, primary_key=True, index=True)

    product_id = Column(
        Integer,
        ForeignKey("products.id")
    )

    location_id = Column(
        Integer,
        ForeignKey("locations.id")
    )

    quantity = Column(Integer)

    destination = Column(String)

    shipped_at = Column(
        DateTime,
        default=datetime.utcnow
    )

    product = relationship("Product")
    location = relationship("Location")