from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime

from app.database import Base


class Warehouse(Base):

    __tablename__ = "warehouses"


    id = Column(
        Integer,
        primary_key=True,
        index=True
    )


    name = Column(
        String,
        nullable=False
    )


    location = Column(
        String
    )


    capacity = Column(
        Integer
    )


    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )