from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime

from app.database import Base


class PurchaseOrder(Base):

    __tablename__ = "purchase_orders"


    id = Column(
        Integer,
        primary_key=True,
        index=True
    )


    supplier_id = Column(
        Integer,
        ForeignKey("suppliers.id")
    )


    status = Column(
        String,
        default="Open"
    )


    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )


    supplier = relationship(
        "Supplier",
        back_populates="purchase_orders"
    )


    items = relationship(
        "PurchaseOrderItem",
        back_populates="purchase_order",
        cascade="all, delete-orphan"
    )



class PurchaseOrderItem(Base):

    __tablename__ = "purchase_order_items"


    id = Column(
        Integer,
        primary_key=True,
        index=True
    )


    purchase_order_id = Column(
        Integer,
        ForeignKey("purchase_orders.id")
    )


    product_id = Column(
        Integer,
        ForeignKey("products.id")
    )


    quantity_ordered = Column(
        Integer
    )


    quantity_received = Column(
        Integer,
        default=0
    )


    purchase_order = relationship(
        "PurchaseOrder",
        back_populates="items"
    )


    product = relationship(
        "Product"
    )