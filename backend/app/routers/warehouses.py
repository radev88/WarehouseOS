from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session, joinedload

from app.database import get_db

from app.models.warehouse import Warehouse
from app.models.inventory import Inventory

from app.security.dependencies import get_current_user


router = APIRouter(
    prefix="/warehouses",
    tags=["Warehouses"]
)



@router.get("/")
def get_warehouses(
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):

    warehouses = db.query(Warehouse).all()


    return [

        {
            "id": warehouse.id,
            "name": warehouse.name
        }

        for warehouse in warehouses

    ]





@router.get("/status")
def warehouse_status(
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):

    inventory = (

        db.query(Inventory)

        .options(
            joinedload(
                Inventory.location
            )
        )

        .all()

    )


    warehouses = {}



    for item in inventory:


        if not item.location:
            continue


        warehouse_name = (
            item.location.warehouse.name
        )


        if warehouse_name not in warehouses:


            warehouses[warehouse_name] = {

                "warehouse": warehouse_name,

                "items": 0,

                "capacity": 1000

            }



        warehouses[warehouse_name]["items"] += item.quantity




    response = []



    for warehouse in warehouses.values():


        utilization = (

            warehouse["items"]

            /

            warehouse["capacity"]

        ) * 100



        if utilization >= 100:

            status = "Over Capacity"


        elif utilization >= 80:

            status = "Near Capacity"


        else:

            status = "Available"



        response.append(

            {

                "warehouse": warehouse["warehouse"],

                "items": warehouse["items"],

                "capacity": warehouse["capacity"],

                "utilization": round(utilization, 2),

                "status": status

            }

        )



    return response