import client from "./client"



export interface Supplier {

    id: number

    name: string

    contact: string

    email: string

    phone: string

    city: string

    state: string

}



export async function getSuppliers(){


    const response =
        await client.get<Supplier[]>(
            "/suppliers/"
        )


    return response.data

}