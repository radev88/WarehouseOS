import { useEffect, useState } from "react"

import {
    getUsers,
    createUser,
    updateUser,
    deleteUser
} from "../api/users"

import type {
    User
} from "../api/users"



function Users(){


    const [users, setUsers] = useState<User[]>([])

    const [loading, setLoading] = useState(true)

    const [showForm, setShowForm] = useState(false)

    const [editingUser, setEditingUser] = useState<User | null>(null)


    const [form, setForm] = useState({

        username: "",

        email: "",

        password: "",

        role: "Warehouse User"

    })



    useEffect(() => {

        let active = true


        async function fetchUsers(){

            try {

                const data = await getUsers()


                if(active){

                    setUsers(data)

                }

            }
            finally {

                if(active){

                    setLoading(false)

                }

            }

        }


        fetchUsers()


        return () => {

            active = false

        }


    }, [])





    async function refreshUsers(){

        const data = await getUsers()

        setUsers(data)

    }





    function resetForm(){

        setForm({

            username: "",

            email: "",

            password: "",

            role: "Warehouse User"

        })


        setEditingUser(null)

        setShowForm(false)

    }





    async function handleSubmit(
        e: React.FormEvent
    ){

        e.preventDefault()


        if(editingUser){

            await updateUser(

                editingUser.id,

                {

                    username: form.username,

                    email: form.email,

                    role: form.role

                }

            )

        }
        else {

            await createUser(form)

        }


        resetForm()

        await refreshUsers()

    }






    function editUser(
        user: User
    ){

        setEditingUser(user)

        setForm({

            username: user.username,

            email: user.email,

            password: "",

            role: user.role

        })


        setShowForm(true)

    }






    async function removeUser(
        id:number
    ){

        if(confirm("Delete this user?")){

            await deleteUser(id)

            await refreshUsers()

        }

    }





    if(loading){

        return (

            <div className="p-6">

                Loading users...

            </div>

        )

    }





    return (

        <div className="p-6">


            <div className="flex justify-between items-center mb-6">

                <h1 className="text-2xl font-bold">

                    User Management

                </h1>


                <button

                    className="bg-slate-900 text-white px-4 py-2 rounded"

                    onClick={() => setShowForm(true)}

                >

                    Add User

                </button>


            </div>





            {showForm && (

                <form

                    onSubmit={handleSubmit}

                    className="border rounded-lg p-5 mb-6 space-y-4"

                >


                    <input

                        className="border p-2 w-full"

                        placeholder="Username"

                        value={form.username}

                        onChange={
                            e =>
                            setForm({
                                ...form,
                                username:e.target.value
                            })
                        }

                    />



                    <input

                        className="border p-2 w-full"

                        placeholder="Email"

                        type="email"

                        value={form.email}

                        onChange={
                            e =>
                            setForm({
                                ...form,
                                email:e.target.value
                            })
                        }

                    />



                    {!editingUser && (

                        <input

                            className="border p-2 w-full"

                            placeholder="Password"

                            type="password"

                            value={form.password}

                            onChange={
                                e =>
                                setForm({
                                    ...form,
                                    password:e.target.value
                                })
                            }

                        />

                    )}



                    <select

                        className="border p-2 w-full"

                        value={form.role}

                        onChange={
                            e =>
                            setForm({
                                ...form,
                                role:e.target.value
                            })
                        }

                    >

                        <option>
                            Admin
                        </option>

                        <option>
                            Manager
                        </option>

                        <option>
                            Warehouse User
                        </option>

                    </select>



                    <div className="flex gap-3">


                        <button

                            type="submit"

                            className="bg-blue-600 text-white px-4 py-2 rounded"

                        >

                            Save

                        </button>



                        <button

                            type="button"

                            className="border px-4 py-2 rounded"

                            onClick={resetForm}

                        >

                            Cancel

                        </button>


                    </div>


                </form>

            )}






            <table className="w-full border">


                <thead>

                    <tr className="border">

                        <th className="p-3 text-left">
                            Username
                        </th>

                        <th className="p-3 text-left">
                            Email
                        </th>

                        <th className="p-3 text-left">
                            Role
                        </th>

                        <th className="p-3">
                            Actions
                        </th>

                    </tr>

                </thead>



                <tbody>

                    {users.map(user => (

                        <tr
                            key={user.id}
                            className="border"
                        >

                            <td className="p-3">
                                {user.username}
                            </td>


                            <td className="p-3">
                                {user.email}
                            </td>


                            <td className="p-3">
                                {user.role}
                            </td>


                            <td className="p-3 flex gap-2">


                                <button

                                    className="border px-3 py-1 rounded"

                                    onClick={() => editUser(user)}

                                >

                                    Edit

                                </button>



                                <button

                                    className="bg-red-600 text-white px-3 py-1 rounded"

                                    onClick={() => removeUser(user.id)}

                                >

                                    Delete

                                </button>


                            </td>


                        </tr>

                    ))}


                </tbody>


            </table>


        </div>

    )

}


export default Users