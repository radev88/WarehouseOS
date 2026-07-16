import client from "./client"



export interface Product {

    id: number

    sku: string

    name: string

    category: string

    unit_cost: number

}



export async function getProducts(){


    const response =
        await client.get<Product[]>(
            "/products/"
        )


    return response.data

}