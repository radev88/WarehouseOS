import axios from "axios"


const API_URL = "http://localhost:8000"



export interface Receiving {

    id: number

    purchase_order_id: number

    supplier: string

    received_date: string

    items: number

    status: string

}



export async function getReceiving(){

    const response = await axios.get<Receiving[]>(
        `${API_URL}/receiving/`
    )


    return response.data

}