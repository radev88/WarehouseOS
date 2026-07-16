import client from "./client"



export interface Receiving {

    id: number

    purchase_order_id: number

    supplier: string

    received_date: string

    items: number

    status: string

}



export async function getReceiving(){


    const response =
        await client.get<Receiving[]>(
            "/receiving/"
        )


    return response.data

}