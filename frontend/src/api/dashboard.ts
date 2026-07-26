import client from "./client"



export interface DashboardStats {


    total_products: number


    total_units: number


    inventory_value: number


    low_stock: number


    out_of_stock: number


    warehouses: number



    orders: {

        open_purchase_orders: number

        pending_receiving: number

        open_sales_orders: number

        ready_to_ship: number

    }



    monthly_activity: {

        receipts: number

        transfers: number

        adjustments: number

    }



    top_movers: {

        product: string

        movement: number

    }[]



    inventoryStatus: {

        label: string

        count: number

    }[]

    recent_transactions: {
        id: number
        product: string
        type: string
        quantity: number
        created_at: string
}[]

}




export async function getDashboardStats(){


    const response =
        await client.get<DashboardStats>(
            "/dashboard/summary"
        )


    return response.data


}