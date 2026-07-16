import client from "./client"



export interface WarehouseStatus {

    warehouse: string

    items: number

    capacity: number

    utilization: number

    status: string

}



export async function getWarehouseStatus(){


    const response =
        await client.get<WarehouseStatus[]>(
            "/warehouses/status"
        )


    return response.data

}