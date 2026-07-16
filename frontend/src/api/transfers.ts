import client from "./client"



export interface TransferCreate {

    product_id: number

    from_location_id: number

    to_location_id: number

    quantity: number

}



export async function createTransfer(
    data: TransferCreate
){


    const response =
        await client.post(
            "/transfers/",
            data
        )


    return response.data

}