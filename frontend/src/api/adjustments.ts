import client from "./client"



export interface AdjustmentCreate {

    product_id: number

    location_id: number

    new_quantity: number

    reason: string

}



export async function createAdjustment(
    data: AdjustmentCreate
){


    const response =
        await client.post(
            "/adjustments/",
            data
        )


    return response.data

}