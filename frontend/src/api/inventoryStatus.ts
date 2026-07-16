import client from "./client"



export interface InventoryStatus {

    name: string

    value: number

}



export async function getInventoryStatus(){


    const response =
        await client.get<InventoryStatus[]>(
            "/reports/inventory-status"
        )


    return response.data

}