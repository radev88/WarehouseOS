import { useState } from "react"
import { useNavigate } from "react-router-dom"

import {
    Boxes,
    ClipboardCheck,
    BarChart3
} from "lucide-react"

import { login } from "../api/auth"



function Login(){


    const navigate = useNavigate()



    const [
        email,
        setEmail
    ] = useState("")



    const [
        password,
        setPassword
    ] = useState("")



    const [
        error,
        setError
    ] = useState("")



    const [
        loading,
        setLoading
    ] = useState(false)





    async function handleSubmit(
        e: React.FormEvent
    ){


        e.preventDefault()


        setError("")

        setLoading(true)



        try {


            await login({

                email,

                password

            })


            navigate("/")


        }


        catch {


            setError(
                "Invalid email or password"
            )


        }


        finally {


            setLoading(false)


        }


    }





    return (

        <div className="
            min-h-screen
            bg-slate-900
            flex
            items-center
            justify-center
            p-6
        ">



            <div className="
                w-full
                max-w-md
            ">




                {/* Branding */}


                <div className="
                    text-center
                    mb-8
                ">


                    <h1 className="
                        text-5xl
                        font-bold
                        text-white
                        mb-3
                    ">

                        WarehouseOS

                    </h1>



                    <p className="
                        text-slate-300
                    ">

                        Enterprise Warehouse Management Platform

                    </p>


                </div>





                {/* Login Card */}


                <div className="
                    bg-white
                    rounded-xl
                    shadow-xl
                    border
                    p-8
                ">



                    <div className="mb-6">


                        <h2 className="
                            text-2xl
                            font-bold
                            text-slate-900
                        ">

                            Welcome back

                        </h2>


                        <p className="
                            text-gray-500
                            mt-2
                        ">

                            Sign in to access your warehouse operations.

                        </p>


                    </div>





                    {error && (

                        <div className="
                            bg-red-50
                            text-red-600
                            text-sm
                            rounded-lg
                            p-3
                            mb-5
                        ">

                            {error}

                        </div>

                    )}







                    <form onSubmit={handleSubmit}>


                        <div className="mb-5">


                            <label className="
                                block
                                text-sm
                                font-medium
                                mb-2
                            ">

                                Email

                            </label>




                            <input

                                type="email"

                                value={email}

                                onChange={
                                    (e)=>
                                    setEmail(
                                        e.target.value
                                    )
                                }

                                className="
                                    w-full
                                    border
                                    rounded-lg
                                    px-4
                                    py-3
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-slate-900
                                "

                                required

                            />


                        </div>







                        <div className="mb-6">


                            <label className="
                                block
                                text-sm
                                font-medium
                                mb-2
                            ">

                                Password

                            </label>





                            <input

                                type="password"

                                value={password}

                                onChange={
                                    (e)=>
                                    setPassword(
                                        e.target.value
                                    )
                                }

                                className="
                                    w-full
                                    border
                                    rounded-lg
                                    px-4
                                    py-3
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-slate-900
                                "

                                required

                            />


                        </div>







                        <button

                            type="submit"

                            disabled={loading}

                            className="
                                w-full
                                bg-slate-900
                                text-white
                                py-3
                                rounded-lg
                                font-semibold
                                hover:bg-slate-700
                                transition
                                disabled:opacity-50
                            "

                        >

                            {
                                loading
                                ? "Signing in..."
                                : "Sign In"
                            }


                        </button>



                    </form>



                </div>







                {/* Feature Footer */}


                <div className="
                    mt-8
                    flex
                    justify-center
                    gap-6
                    text-slate-300
                    text-sm
                ">



                    <div className="
                        flex
                        items-center
                        gap-2
                    ">

                        <Boxes size={16}/>

                        Inventory

                    </div>





                    <div className="
                        flex
                        items-center
                        gap-2
                    ">

                        <ClipboardCheck size={16}/>

                        Receiving

                    </div>





                    <div className="
                        flex
                        items-center
                        gap-2
                    ">

                        <BarChart3 size={16}/>

                        Analytics

                    </div>



                </div>



            </div>


        </div>

    )

}


export default Login