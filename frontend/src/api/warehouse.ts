import axios from "axios"


const API_URL = "http://localhost:8000"



export interface WarehouseStatus {

    warehouse: string

    items: number

    capacity: number

    utilization: number

    status: string

}



export async function getWarehouseStatus(){

    const response =
        await axios.get<WarehouseStatus[]>(
            `${API_URL}/warehouses/status`
        )


    return response.data

}