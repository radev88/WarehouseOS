from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session, joinedload
from sqlalchemy import func

from app.database import get_db

from app.models.inventory import Inventory
from app.models.purchase_order import PurchaseOrder
from app.models.transactions import Transaction
from app.models.product import Product


router = APIRouter(
    prefix="/reports",
    tags=["Reports"]
)


@router.get("/summary")
def reports_summary(
    db: Session = Depends(get_db)
):

    inventory_value = (

        db.query(
            func.sum(
                Inventory.quantity *
                func.coalesce(Product.unit_cost, 0)
            )
        )

        .join(
            Product,
            Inventory.product_id == Product.id
        )

        .scalar()

        or 0

    )


    active_skus = (

        db.query(
            Inventory.product_id
        )

        .distinct()

        .count()

    )


    open_receipts = (

        db.query(
            PurchaseOrder
        )

        .filter(
            PurchaseOrder.status == "OPEN"
        )

        .count()

    )


    quality_holds = (

        db.query(
            Inventory
        )

        .filter(
            Inventory.quantity < 100
        )

        .count()

    )


    return {

        "inventory_value": float(inventory_value),

        "active_skus": active_skus,

        "open_receipts": open_receipts,

        "quality_holds": quality_holds

    }



@router.get("/inventory-status")
def inventory_status(
    db: Session = Depends(get_db)
):

    inventory = (
        db.query(Inventory)
        .all()
    )


    available = 0

    low_stock = 0

    out_of_stock = 0


    for item in inventory:

        if item.quantity == 0:

            out_of_stock += 1


        elif item.quantity < 100:

            low_stock += 1


        else:

            available += 1



    return [

        {
            "name": "Available",
            "value": available
        },

        {
            "name": "Low Stock",
            "value": low_stock
        },

        {
            "name": "Out of Stock",
            "value": out_of_stock
        }

    ]



@router.get("/inventory-category")
def inventory_category(
    db: Session = Depends(get_db)
):

    inventory = (

        db.query(Inventory)

        .options(
            joinedload(
                Inventory.product
            )
        )

        .all()

    )


    categories = {}


    for item in inventory:

        if not item.product:

            continue


        category = item.product.category


        if category not in categories:

            categories[category] = 0


        categories[category] += item.quantity



    return [

        {
            "name": category,
            "value": quantity
        }

        for category, quantity in categories.items()

    ]



@router.get("/supplier-activity")
def supplier_activity(
    db: Session = Depends(get_db)
):

    results = (

        db.query(

            PurchaseOrder.supplier_id,

            func.count(
                PurchaseOrder.id
            )

        )

        .group_by(
            PurchaseOrder.supplier_id
        )

        .all()

    )


    response = []


    for supplier_id, count in results:


        order = (

            db.query(
                PurchaseOrder
            )

            .options(
                joinedload(
                    PurchaseOrder.supplier
                )
            )

            .filter(
                PurchaseOrder.supplier_id == supplier_id
            )

            .first()

        )


        if order and order.supplier:

            response.append(

                {

                    "supplier":
                    order.supplier.name,

                    "orders":
                    count

                }

            )


    return response



@router.get("/recent-activity")
def recent_activity(
    db: Session = Depends(get_db)
):

    transactions = (

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


    activities = []


    for transaction in transactions:


        product_name = (

            transaction.product.name

            if transaction.product

            else "Unknown Product"

        )


        activities.append(

            {

                "activity":
                f"{transaction.type} - {product_name}",


                "time":
                transaction.created_at.strftime(
                    "%Y-%m-%d %H:%M"
                )

            }

        )


    return activities