import client from "./client"



export interface Transaction {

    id: number

    type: string

    product: string

    quantity: number

    date: string

}



export async function getTransactions(){


    const response =
        await client.get<Transaction[]>(
            "/transactions/"
        )


    return response.data

}