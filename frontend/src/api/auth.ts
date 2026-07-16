import axios from "axios"


const API_URL = "http://localhost:8000"



interface LoginRequest {

    email: string

    password: string

}



interface LoginResponse {

    access_token: string

    token_type: string

    username: string

    email: string

    role: string

}



export async function login(
    data: LoginRequest
){

    const response =
        await axios.post<LoginResponse>(
            `${API_URL}/auth/login`,
            data
        )


    localStorage.setItem(
        "token",
        response.data.access_token
    )


    localStorage.setItem(
        "user",
        JSON.stringify({
            username: response.data.username,
            email: response.data.email,
            role: response.data.role
        })
    )


    return response.data

}



export function isAuthenticated(){

    const token =
        localStorage.getItem(
            "token"
        )


    return !!token

}



export function getCurrentUser(){

    const user =
        localStorage.getItem(
            "user"
        )


    if(!user){

        return null

    }


    return JSON.parse(user)

}



export function getUserRole(){

    const user = getCurrentUser()


    return user?.role || null

}



export function logout(){

    localStorage.removeItem(
        "token"
    )


    localStorage.removeItem(
        "user"
    )

}