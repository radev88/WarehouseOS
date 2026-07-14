import axios from "axios"


const API_URL = "http://localhost:8000"



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
    await axios.get<InventoryItem[]>(
        `${API_URL}/inventory/`
    )


    return response.data

}