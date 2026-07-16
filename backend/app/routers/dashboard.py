from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session, joinedload
from sqlalchemy import func
from datetime import datetime

from app.database import get_db

from app.models.inventory import Inventory
from app.models.product import Product
from app.models.transactions import Transaction
from app.models.purchase_order import PurchaseOrder
from app.models.sales_order import SalesOrder

from app.security.dependencies import get_current_user


router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)



@router.get("/summary")
def dashboard_summary(
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):


    inventory = (

        db.query(Inventory)

        .options(

            joinedload(
                Inventory.product
            ),

            joinedload(
                Inventory.location
            )

        )

        .all()

    )



    total_units = sum(

        item.quantity

        for item in inventory

    )



    total_products = (

        db.query(Product)

        .count()

    )



    inventory_value = sum(

        item.quantity *
        float(item.product.unit_cost)

        for item in inventory

        if item.product
        and item.product.unit_cost

    )



    low_stock = len([

        item

        for item in inventory

        if 0 < item.quantity < 100

    ])



    out_of_stock = len([

        item

        for item in inventory

        if item.quantity == 0

    ])



    available = len([

        item

        for item in inventory

        if item.quantity >= 100

    ])



    warehouses = len({

        item.location.warehouse_id

        for item in inventory

        if item.location

    })



    start_of_month = (

        datetime.utcnow()

        .replace(

            day=1,

            hour=0,

            minute=0,

            second=0,

            microsecond=0

        )

    )



    receipts = (

        db.query(Transaction)

        .filter(

            Transaction.type == "RECEIPT",

            Transaction.created_at >= start_of_month

        )

        .count()

    )



    transfers = (

        db.query(Transaction)

        .filter(

            Transaction.type == "TRANSFER",

            Transaction.created_at >= start_of_month

        )

        .count()

    )



    adjustments = (

        db.query(Transaction)

        .filter(

            Transaction.type == "ADJUSTMENT",

            Transaction.created_at >= start_of_month

        )

        .count()

    )



    open_purchase_orders = (

        db.query(PurchaseOrder)

        .filter(

            PurchaseOrder.status == "Open"

        )

        .count()

    )



    pending_receiving = (

        db.query(PurchaseOrder)

        .filter(

            PurchaseOrder.status == "Partially Received"

        )

        .count()

    )



    open_sales_orders = (

        db.query(SalesOrder)

        .filter(

            SalesOrder.status == "OPEN"

        )

        .count()

    )



    ready_to_ship = (

        db.query(SalesOrder)

        .filter(

            SalesOrder.status == "READY TO SHIP"

        )

        .count()

    )



    top_products = (

        db.query(

            Transaction.product_id,

            func.sum(
                Transaction.quantity
            ).label(
                "movement"
            )

        )

        .group_by(

            Transaction.product_id

        )

        .order_by(

            func.sum(
                Transaction.quantity
            )

            .desc()

        )

        .limit(5)

        .all()

    )



    top_movers = []



    for product_id, movement in top_products:


        product = (

            db.query(Product)

            .filter(

                Product.id == product_id

            )

            .first()

        )


        if product:

            top_movers.append({

                "product": product.name,

                "movement": int(movement)

            })



    recent_transactions = (

        db.query(Transaction)

        .options(

            joinedload(
                Transaction.product
            )

        )

        .order_by(

            Transaction.created_at.desc()

        )

        .limit(10)

        .all()

    )



    return {

        "total_units": total_units,

        "total_skus": total_products,

        "total_products": total_products,

        "inventory_value": round(
            inventory_value,
            2
        ),

        "low_stock": low_stock,

        "out_of_stock": out_of_stock,

        "warehouses": warehouses,


        "orders": {

            "open_purchase_orders":
                open_purchase_orders,

            "pending_receiving":
                pending_receiving,

            "open_sales_orders":
                open_sales_orders,

            "ready_to_ship":
                ready_to_ship

        },


        "monthly_activity": {

            "receipts": receipts,

            "transfers": transfers,

            "adjustments": adjustments

        },


        "top_movers": top_movers,


        "inventoryStatus": [

            {
                "label": "Available",
                "count": available
            },

            {
                "label": "Low Stock",
                "count": low_stock
            },

            {
                "label": "Out of Stock",
                "count": out_of_stock
            }

        ],


        "recent_transactions": [

            {

                "id": transaction.id,

                "product":
                    transaction.product.name
                    if transaction.product
                    else "Unknown",

                "type": transaction.type,

                "quantity": transaction.quantity,

                "created_at":
                    transaction.created_at

            }

            for transaction in recent_transactions

        ]

    }