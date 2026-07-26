from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session, joinedload

from app.database import get_db

from app.models.warehouse import Warehouse
from app.models.inventory import Inventory
from app.models.location import Location

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


    warehouses = (
        db.query(Warehouse)
        .all()
    )


    inventory = (

        db.query(Inventory)

        .options(
            joinedload(
                Inventory.location
            )
        )

        .all()

    )



    warehouse_units = {}



    for warehouse in warehouses:

        warehouse_units[warehouse.id] = {

            "warehouse": warehouse.name,

            "units": 0,

            "capacity": warehouse.capacity or 0

        }




    for item in inventory:


        if not item.location:

            continue



        warehouse_id = (
            item.location.warehouse_id
        )



        if warehouse_id in warehouse_units:


            warehouse_units[warehouse_id]["units"] += (
                item.quantity
            )




    response = []



    for warehouse in warehouse_units.values():


        if warehouse["capacity"] > 0:


            utilization = (

                warehouse["units"]

                /

                warehouse["capacity"]

            ) * 100


        else:

            utilization = 0




        if utilization >= 100:

            status = "Over Capacity"


        elif utilization >= 80:

            status = "Near Capacity"


        else:

            status = "Available"




        response.append(

            {

                "warehouse": warehouse["warehouse"],

                "units": warehouse["units"],

                "capacity": warehouse["capacity"],

                "utilization": round(
                    utilization,
                    2
                ),

                "status": status

            }

        )



    return response