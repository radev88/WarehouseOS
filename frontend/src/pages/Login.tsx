import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { login } from "../api/auth"



function Login(){


    const navigate = useNavigate()


    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const [error, setError] = useState("")

    const [loading, setLoading] = useState(false)



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


        } catch {


            setError(
                "Invalid email or password"
            )


        } finally {


            setLoading(false)


        }

    }



    return (

        <div className="min-h-screen flex items-center justify-center bg-slate-100">


            <div className="bg-white p-8 rounded-lg shadow-md w-96">


                <h1 className="text-2xl font-bold mb-6 text-center">

                    WarehouseOS Login

                </h1>



                {error && (

                    <p className="text-red-500 mb-4 text-sm">

                        {error}

                    </p>

                )}



                <form onSubmit={handleSubmit}>


                    <div className="mb-4">


                        <label className="block text-sm font-medium mb-1">

                            Email

                        </label>



                        <input

                            className="border rounded-md p-2 w-full"

                            type="email"

                            value={email}

                            onChange={
                                (e) =>
                                setEmail(
                                    e.target.value
                                )
                            }

                            required

                        />


                    </div>




                    <div className="mb-6">


                        <label className="block text-sm font-medium mb-1">

                            Password

                        </label>



                        <input

                            className="border rounded-md p-2 w-full"

                            type="password"

                            value={password}

                            onChange={
                                (e) =>
                                setPassword(
                                    e.target.value
                                )
                            }

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
                        py-2
                        rounded-md
                        hover:bg-slate-700
                        disabled:opacity-50
                        "

                    >

                        {
                            loading
                            ? "Logging in..."
                            : "Login"
                        }

                    </button>



                </form>



            </div>


        </div>

    )

}


export default Login