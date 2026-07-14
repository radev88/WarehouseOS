import axios from "axios"


const API_URL = "http://localhost:8000"



export interface DashboardStats {

    total_units: number

    total_skus: number

    inventory_value: number

    low_stock: number

    out_of_stock: number

    warehouses: number


    inventoryStatus: {

        label: string

        count: number

    }[]



    monthly_activity: {

        receipts: number

        transfers: number

        adjustments: number

    }



    top_movers: {

        product: string

        movement: number

    }[]

}



export const getDashboardStats = async (): Promise<DashboardStats> => {


    const response = await axios.get<DashboardStats>(
        `${API_URL}/dashboard/summary`
    )


    return response.data

}