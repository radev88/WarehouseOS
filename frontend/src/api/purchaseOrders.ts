import axios from "axios"


const API_URL = "http://localhost:8000"



export interface PurchaseOrder {

    id:number

    supplier_id:number

    status:string

    created_at:string

}



export async function getPurchaseOrders(){

    const response = await axios.get<PurchaseOrder[]>(
        `${API_URL}/purchase-orders/`
    )

    return response.data

}