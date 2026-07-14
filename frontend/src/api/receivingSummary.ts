import axios from "axios"


const API_URL = "http://localhost:8000"



export interface ReceivingSummary {

    open_receipts: number

    pending_receipts: number

    completed_receipts: number

}



export async function getReceivingSummary(){

    const response = await axios.get<ReceivingSummary>(
        `${API_URL}/receiving/summary`
    )


    return response.data

}