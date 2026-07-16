import client from "./client"



export interface PurchaseOrder {

    id:number

    supplier_id:number

    status:string

    created_at:string

}



export async function getPurchaseOrders(){


    const response =
        await client.get<PurchaseOrder[]>(
            "/purchase-orders/"
        )


    return response.data

}