import client from "./client"



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



export const getDashboardStats = async () => {


    const response =
        await client.get<DashboardStats>(

            "/dashboard/summary"

        )


    return response.data

}