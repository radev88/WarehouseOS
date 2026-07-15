from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime

from app.database import Base


class SalesOrder(Base):

    __tablename__ = "sales_orders"


    id = Column(
        Integer,
        primary_key=True,
        index=True
    )


    customer_id = Column(
        Integer,
        ForeignKey("customers.id")
    )


    status = Column(
        String,
        default="OPEN"
    )


    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )


    customer = relationship(
        "Customer",
        back_populates="sales_orders"
    )


    items = relationship(
        "SalesOrderItem",
        back_populates="sales_order",
        cascade="all, delete-orphan"
    )



class SalesOrderItem(Base):

    __tablename__ = "sales_order_items"


    id = Column(
        Integer,
        primary_key=True,
        index=True
    )


    sales_order_id = Column(
        Integer,
        ForeignKey("sales_orders.id")
    )


    product_id = Column(
        Integer,
        ForeignKey("products.id")
    )


    quantity = Column(
        Integer,
        nullable=False
    )


    picked_quantity = Column(
        Integer,
        default=0
    )


    sales_order = relationship(
        "SalesOrder",
        back_populates="items"
    )


    product = relationship(
        "Product"
    )