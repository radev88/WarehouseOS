import axios from "axios"


const API_URL = "http://localhost:8000"



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
        await axios.get<InventoryStatus[]>(
            `${API_URL}/reports/inventory-status`
        )

    return response.data

}



export async function getInventoryCategories(){

    const response =
        await axios.get<InventoryCategory[]>(
            `${API_URL}/reports/inventory-category`
        )

    return response.data

}



export async function getSupplierActivity(){

    const response =
        await axios.get<SupplierActivity[]>(
            `${API_URL}/reports/supplier-activity`
        )

    return response.data

}



export interface RecentActivity {

    activity:string
    time:string

}



export async function getRecentActivity(){

    const response =
        await axios.get<RecentActivity[]>(
            `${API_URL}/reports/recent-activity`
        )

    return response.data

}

export interface ReportsSummary {

    inventory_value:number

    active_skus:number

    open_receipts:number

    quality_holds:number

}



export async function getReportsSummary(){

    const response =
        await axios.get<ReportsSummary>(
            `${API_URL}/reports/summary`
        )


    return response.data

}