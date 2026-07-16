import client from "./client"



export interface InventoryStatus {

    name: string

    value: number

}



export interface InventoryCategory {

    name: string

    value: number

}



export interface SupplierActivity {

    supplier: string

    orders: number

}



export async function getInventoryStatus(){


    const response =
        await client.get<InventoryStatus[]>(
            "/reports/inventory-status"
        )


    return response.data

}



export async function getInventoryCategories(){


    const response =
        await client.get<InventoryCategory[]>(
            "/reports/inventory-category"
        )


    return response.data

}



export async function getSupplierActivity(){


    const response =
        await client.get<SupplierActivity[]>(
            "/reports/supplier-activity"
        )


    return response.data

}



export interface RecentActivity {

    activity: string

    time: string

}



export async function getRecentActivity(){


    const response =
        await client.get<RecentActivity[]>(
            "/reports/recent-activity"
        )


    return response.data

}



export interface ReportsSummary {

    inventory_value: number

    active_skus: number

    open_receipts: number

    quality_holds: number

}



export async function getReportsSummary(){


    const response =
        await client.get<ReportsSummary>(
            "/reports/summary"
        )


    return response.data

}