import client from "./client"



export interface ReceivingSummary {

    open_receipts: number

    pending_receipts: number

    completed_receipts: number

}



export async function getReceivingSummary(){


    const response =
        await client.get<ReceivingSummary>(
            "/receiving/summary"
        )


    return response.data

}