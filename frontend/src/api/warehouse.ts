import client from "./client"



export interface WarehouseStatus {

    warehouse: string

    units: number

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