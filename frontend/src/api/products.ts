import axios from "axios"


const API_URL = "http://localhost:8000"



export interface Product {

    id: number

    sku: string

    name: string

    category: string

    unit_cost: number

}



export async function getProducts(){

    const response =
        await axios.get<Product[]>(
            `${API_URL}/products/`
        )


    return response.data

}