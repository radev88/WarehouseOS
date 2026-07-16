from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import engine

from app.routers import products
from app.routers import inventory
from app.routers import dashboard
from app.routers import warehouses
from app.routers import transactions
from app.routers import receiving
from app.routers import locations
from app.routers import adjustments
from app.routers import purchase_orders
from app.routers import transfers
from app.routers import customers
from app.routers import sales_orders
from app.routers import reports
from app.routers import auth
from app.routers import users



app = FastAPI(
    title="WarehouseOS API",
    version="1.0.0"
)



app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



app.include_router(products.router)

app.include_router(inventory.router)

app.include_router(dashboard.router)

app.include_router(warehouses.router)

app.include_router(transactions.router)

app.include_router(receiving.router)

app.include_router(locations.router)

app.include_router(adjustments.router)

app.include_router(purchase_orders.router)

app.include_router(transfers.router)

app.include_router(customers.router)

app.include_router(sales_orders.router)

app.include_router(reports.router)

app.include_router(auth.router)

app.include_router(users.router)



@app.get("/")
def root():

    return {
        "message": "WarehouseOS API running"
    }



@app.get("/database-test")
def database_test():

    try:

        connection = engine.connect()

        connection.close()


        return {
            "database": "connected"
        }


    except Exception as e:

        return {
            "error": str(e)
        }