from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import engine
from app.routers import products
from app.routers import inventory


app = FastAPI(
    title="WarehouseOS API",
    version="1.0.0"
)


# Allow React frontend to communicate with FastAPI
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