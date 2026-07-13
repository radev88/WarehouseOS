import axios from "axios"


const API_URL = "http://localhost:8000"


export interface Warehouse {
    id: number
    name: string
}


export const getWarehouses = async () => {

    const response = await axios.get<Warehouse[]>(
        `${API_URL}/warehouses/`
    )

    return response.data
}