import client from "./client"



export interface InventoryItem {

    id: number

    sku: string

    product: string

    warehouse: string

    location: string

    quantity: number

    status: string

}



export async function getInventory(){


    const response =
        await client.get<InventoryItem[]>(
            "/inventory/"
        )


    return response.data

}