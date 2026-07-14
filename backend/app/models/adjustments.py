from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime

from app.database import Base


class Adjustment(Base):

    __tablename__ = "adjustments"


    id = Column(
        Integer,
        primary_key=True,
        index=True
    )


    product_id = Column(
        Integer,
        ForeignKey("products.id")
    )


    location_id = Column(
        Integer,
        ForeignKey("locations.id")
    )


    previous_quantity = Column(
        Integer
    )


    new_quantity = Column(
        Integer
    )


    reason = Column(
        String
    )


    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )


    product = relationship("Product")
    location = relationship("Location")