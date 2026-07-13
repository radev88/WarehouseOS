import axios from "axios"


const API_URL = "http://localhost:8000"


export async function getInventory(){

    const response = await axios.get(
        `${API_URL}/inventory/`
    )

    return response.data

}