import axios from "axios"


const API_URL = "http://localhost:8000"



export interface SalesOrderItem {

    id: number

    product_id: number

    quantity: number

    picked_quantity: number

}



export interface SalesOrder {

    id: number

    customer_id: number

    status: string

    created_at: string

    items: SalesOrderItem[]

}





export async function getSalesOrders(){

    const response =
        await axios.get<SalesOrder[]>(
            `${API_URL}/sales-orders/`
        )


    return response.data

}






export async function getSalesOrder(
    id:number
){

    const response =
        await axios.get<SalesOrder>(
            `${API_URL}/sales-orders/${id}`
        )


    return response.data

}







export async function pickSalesOrder(
    id:number
){

    const response =
        await axios.post(
            `${API_URL}/sales-orders/${id}/pick`
        )


    return response.data

}







export async function fulfillSalesOrder(
    id:number
){

    const response =
        await axios.post(
            `${API_URL}/sales-orders/${id}/fulfill`
        )


    return response.data

}

export interface SalesOrderSummary {

    open_orders:number

    pending_shipment:number

    customers:number

}



export async function getSalesOrderSummary(){

    const response =
        await axios.get<SalesOrderSummary>(
            `${API_URL}/sales-orders/summary`
        )


    return response.data

}