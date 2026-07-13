import axios from "axios"


const API_URL = "http://localhost:8000"


export interface DashboardStats {
    total_units: number
    total_skus: number
    low_stock: number
    warehouses: number
}


export const getDashboardStats = async () => {

    const response = await axios.get<DashboardStats>(
        `${API_URL}/inventory/stats`
    )

    return response.data
}