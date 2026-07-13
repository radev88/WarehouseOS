from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.database import Base


class Location(Base):

    __tablename__ = "locations"


    id = Column(
        Integer,
        primary_key=True,
        index=True
    )


    warehouse_id = Column(
        Integer,
        ForeignKey("warehouses.id")
    )


    code = Column(
        String
    )


    warehouse = relationship(
        "Warehouse"
    )