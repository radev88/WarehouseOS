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

import KPICard from "../components/dashboard/KPICard"

import StatusBadge from "../components/common/StatusBadge"

import {
    Users as UsersIcon,
    ShieldCheck,
    UserCog,
    Warehouse
} from "lucide-react"



function Users(){


    const [
        users,
        setUsers
    ] = useState<User[]>([])



    const [
        loading,
        setLoading
    ] = useState(true)



    const [
        showForm,
        setShowForm
    ] = useState(false)



    const [
        editingUser,
        setEditingUser
    ] = useState<User | null>(null)



    const [
        form,
        setForm
    ] = useState({

        username:"",
        email:"",
        password:"",
        role:"Warehouse User"

    })





    useEffect(()=>{


        async function fetchUsers(){

            try{

                const data =
                    await getUsers()

                setUsers(data)

            }

            finally{

                setLoading(false)

            }

        }


        fetchUsers()


    },[])






    async function refreshUsers(){

        const data =
            await getUsers()

        setUsers(data)

    }






    function resetForm(){


        setForm({

            username:"",
            email:"",
            password:"",
            role:"Warehouse User"

        })


        setEditingUser(null)

        setShowForm(false)

    }






    async function handleSubmit(
        e:React.FormEvent
    ){

        e.preventDefault()


        if(editingUser){


            await updateUser(

                editingUser.id,

                {

                    username:form.username,

                    email:form.email,

                    role:form.role

                }

            )


        }
        else{


            await createUser(form)


        }


        resetForm()

        refreshUsers()


    }







    function editUser(
        user:User
    ){


        setEditingUser(user)


        setForm({

            username:user.username,

            email:user.email,

            password:"",

            role:user.role

        })


        setShowForm(true)


    }






    async function removeUser(
        id:number
    ){


        if(confirm("Delete this user?")){


            await deleteUser(id)

            refreshUsers()


        }


    }






    function getInitials(
        username:string
    ){

        return username

            .trim()

            .split(/\s+/)

            .slice(0,2)

            .map(
                name => name[0]
            )

            .join("")

            .toUpperCase()

    }






    const admins =
        users.filter(
            user=>user.role==="Admin"
        ).length



    const managers =
        users.filter(
            user=>user.role==="Manager"
        ).length



    const warehouseUsers =
        users.filter(
            user=>user.role==="Warehouse User"
        ).length






    if(loading){


        return (

            <div className="p-6">

                Loading users...

            </div>

        )

    }






    return (

        <div className="space-y-8">



            <div>


                <h1 className="text-3xl font-bold">

                    User Management

                </h1>


                <p className="text-gray-500">

                    Manage system access, roles, and warehouse permissions.

                </p>


            </div>







            <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                xl:grid-cols-4
                gap-6
            ">


                <KPICard

                    title="Total Users"

                    value={users.length}

                    description="System accounts"

                    icon={UsersIcon}

                />



                <KPICard

                    title="Administrators"

                    value={admins}

                    description="Full system access"

                    icon={ShieldCheck}

                />



                <KPICard

                    title="Managers"

                    value={managers}

                    description="Operations management"

                    icon={UserCog}

                />



                <KPICard

                    title="Warehouse Users"

                    value={warehouseUsers}

                    description="Warehouse operations"

                    icon={Warehouse}

                />


            </div>







            <div className="
                rounded-xl
                border
                bg-white
                shadow-sm
                overflow-hidden
            ">



                <div className="
                    flex
                    justify-between
                    items-center
                    p-6
                    border-b
                ">


                    <h2 className="text-lg font-semibold">

                        Users

                    </h2>



                    <button

                        onClick={()=>setShowForm(true)}

                        className="
                            bg-slate-900
                            text-white
                            px-4
                            py-2
                            rounded-xl
                            hover:bg-slate-700
                        "

                    >

                        Add User

                    </button>


                </div>








                {
                    showForm && (

                        <form

                            onSubmit={handleSubmit}

                            className="
                                p-6
                                border-b
                                space-y-4
                                bg-slate-50
                            "

                        >

                            <input

                                className="
                                    w-full
                                    rounded-lg
                                    border
                                    p-3
                                "

                                placeholder="Username"

                                value={form.username}

                                onChange={
                                    e=>
                                    setForm({
                                        ...form,
                                        username:e.target.value
                                    })
                                }

                            />



                            <input

                                className="
                                    w-full
                                    rounded-lg
                                    border
                                    p-3
                                "

                                placeholder="Email"

                                value={form.email}

                                onChange={
                                    e=>
                                    setForm({
                                        ...form,
                                        email:e.target.value
                                    })
                                }

                            />



                            {!editingUser && (

                                <input

                                    className="
                                        w-full
                                        rounded-lg
                                        border
                                        p-3
                                    "

                                    placeholder="Password"

                                    type="password"

                                    value={form.password}

                                    onChange={
                                        e=>
                                        setForm({
                                            ...form,
                                            password:e.target.value
                                        })
                                    }

                                />

                            )}



                            <select

                                className="
                                    w-full
                                    rounded-lg
                                    border
                                    p-3
                                "

                                value={form.role}

                                onChange={
                                    e=>
                                    setForm({
                                        ...form,
                                        role:e.target.value
                                    })
                                }

                            >

                                <option>Admin</option>

                                <option>Manager</option>

                                <option>Warehouse User</option>


                            </select>



                            <div className="flex gap-3">


                                <button

                                    className="
                                        bg-blue-600
                                        text-white
                                        px-4
                                        py-2
                                        rounded-lg
                                    "

                                >

                                    Save

                                </button>



                                <button

                                    type="button"

                                    onClick={resetForm}

                                    className="
                                        border
                                        px-4
                                        py-2
                                        rounded-lg
                                    "

                                >

                                    Cancel

                                </button>


                            </div>


                        </form>

                    )
                }








                <div className="overflow-x-auto">


                    <table className="w-full">


                        <thead className="bg-slate-50">


                            <tr>


                                <th className="p-4 text-left">
                                    User
                                </th>


                                <th className="p-4 text-left">
                                    Role
                                </th>


                                <th className="p-4 text-left">
                                    Email
                                </th>


                                <th className="p-4">
                                    Actions
                                </th>


                            </tr>


                        </thead>





                        <tbody>


                            {
                                users.map(user=>(


                                    <tr

                                        key={user.id}

                                        className="
                                            border-t
                                            hover:bg-slate-50
                                        "

                                    >



                                        <td className="p-4">


                                            <div className="flex items-center gap-3">


                                                <div className="
                                                    h-10
                                                    w-10
                                                    rounded-full
                                                    bg-slate-900
                                                    text-white
                                                    flex
                                                    items-center
                                                    justify-center
                                                    font-semibold
                                                ">

                                                    {
                                                        getInitials(
                                                            user.username
                                                        )
                                                    }

                                                </div>


                                                <div>

                                                    <p className="font-medium">

                                                        {user.username}

                                                    </p>


                                                </div>


                                            </div>


                                        </td>




                                        <td className="p-4">

                                            <StatusBadge
                                                status={user.role}
                                            />

                                        </td>



                                        <td className="p-4">

                                            {user.email}

                                        </td>




                                        <td className="p-4">


                                            <div className="flex gap-2">


                                                <button

                                                    onClick={()=>
                                                        editUser(user)
                                                    }

                                                    className="
                                                        border
                                                        px-3
                                                        py-1
                                                        rounded-lg
                                                    "

                                                >

                                                    Edit

                                                </button>



                                                <button

                                                    onClick={()=>
                                                        removeUser(user.id)
                                                    }

                                                    className="
                                                        bg-red-600
                                                        text-white
                                                        px-3
                                                        py-1
                                                        rounded-lg
                                                    "

                                                >

                                                    Delete

                                                </button>


                                            </div>


                                        </td>


                                    </tr>


                                ))
                            }


                        </tbody>


                    </table>


                </div>



            </div>



        </div>

    )

}



export default Users