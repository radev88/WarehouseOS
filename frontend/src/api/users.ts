import client from "./client"



export interface User {

    id: number

    username: string

    email: string

    role: string

}



export interface CreateUser {

    username: string

    email: string

    password: string

    role: string

}



export interface UpdateUser {

    username: string

    email: string

    role: string

}




export async function getUsers(){

    const response = await client.get<User[]>(
        "/users/"
    )

    return response.data

}




export async function createUser(
    data: CreateUser
){

    const response = await client.post<User>(
        "/users/",
        data
    )


    return response.data

}




export async function updateUser(
    id: number,
    data: UpdateUser
){

    const response = await client.put<User>(
        `/users/${id}`,
        data
    )


    return response.data

}




export async function deleteUser(
    id: number
){

    const response = await client.delete(
        `/users/${id}`
    )


    return response.data

}