import axios from "axios"


const API_URL = "http://localhost:8000"



export interface AdjustmentCreate {

    product_id: number

    location_id: number

    new_quantity: number

    reason: string

}



export async function createAdjustment(
    data: AdjustmentCreate
){

    const response = await axios.post(

        `${API_URL}/adjustments/`,

        data

    )


    return response.data

}