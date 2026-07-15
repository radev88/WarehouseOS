import axios from "axios"


const API_URL = "http://localhost:8000"



export interface Transaction {

    id: number

    type: string

    product: string

    quantity: number

    date: string

}



export async function getTransactions(){

    const response =
        await axios.get<Transaction[]>(
            `${API_URL}/transactions/`
        )


    return response.data

}