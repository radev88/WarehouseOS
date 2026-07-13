import axios from "axios"


const API_URL = "http://localhost:8000"


export interface InventoryStatus {

    available: number
    low_stock: number
    out_of_stock: number

}


export const getInventoryStatus = async () => {

    const response = await axios.get<InventoryStatus>(
        `${API_URL}/inventory/status-summary`
    )

    return response.data

}