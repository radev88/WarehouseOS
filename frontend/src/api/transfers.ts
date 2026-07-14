import axios from "axios"


const API_URL = "http://localhost:8000"



export interface TransferCreate {

    product_id: number

    from_location_id: number

    to_location_id: number

    quantity: number

}



export async function createTransfer(
    data: TransferCreate
){

    const response = await axios.post(
        `${API_URL}/transfers/`,
        data
    )


    return response.data

}