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