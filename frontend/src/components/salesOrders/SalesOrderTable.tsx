import { useEffect, useState } from "react"

import StatusBadge from "../common/StatusBadge"

import {
    getSalesOrders,
    fulfillSalesOrder
} from "../../api/salesOrders"

import type {
    SalesOrder
} from "../../api/salesOrders"



function SalesOrderTable(){


    const [
        orders,
        setOrders
    ] = useState<SalesOrder[]>([])



    const [
        loading,
        setLoading
    ] = useState(true)



    async function loadOrders(){

        try{

            const data = await getSalesOrders()

            setOrders(data)

        }

        catch(error){

            console.error(
                "Sales order error:",
                error
            )

        }

        finally{

            setLoading(false)

        }

    }





    useEffect(()=>{

        const timer = setTimeout(()=>{

            loadOrders()

        },0)


        return () => clearTimeout(timer)


    },[])






    async function handleFulfill(
        id:number
    ){

        try{

            await fulfillSalesOrder(id)

            await loadOrders()

        }

        catch(error: unknown){

            console.error(
                "Fulfillment error:",
                error
            )


            if(
                error &&
                typeof error === "object" &&
                "response" in error
            ){

                const axiosError =
                    error as {
                        response?: {
                            data?: {
                                detail?: string
                            }
                        }
                    }


                alert(
                    axiosError
                    .response
                    ?.data
                    ?.detail
                    ||
                    "Unable to fulfill order"
                )

            }

            else{

                alert(
                    "Unable to fulfill order"
                )

            }

        }

    }






    if(loading){

        return (

            <div className="rounded-xl border bg-white p-6">

                Loading sales orders...

            </div>

        )

    }






    return (

        <div className="rounded-xl border bg-white shadow-sm">


            <table className="w-full">


                <thead className="bg-gray-50">

                    <tr>


                        <th className="p-4 text-left">
                            Order #
                        </th>


                        <th className="p-4 text-left">
                            Customer
                        </th>


                        <th className="p-4 text-left">
                            Status
                        </th>


                        <th className="p-4 text-left">
                            Action
                        </th>


                    </tr>


                </thead>




                <tbody>


                {
                    orders.map((order)=>(


                        <tr
                            key={order.id}
                            className="border-t hover:bg-gray-50"
                        >


                            <td className="p-4 font-medium">

                                SO-{order.id}

                            </td>



                            <td className="p-4">

                                Customer #{order.customer_id}

                            </td>




                            <td className="p-4">

                                <StatusBadge 
                                    status={order.status}
                                />

                            </td>





                            <td className="p-4">


                            {
                                order.status !== "FULFILLED" &&

                                <button

                                    onClick={() =>
                                        handleFulfill(order.id)
                                    }

                                    className="
                                    bg-blue-600
                                    text-white
                                    px-4
                                    py-2
                                    rounded-lg
                                    hover:bg-blue-700
                                    "

                                >

                                    Fulfill

                                </button>

                            }


                            </td>


                        </tr>


                    ))

                }


                </tbody>


            </table>


        </div>

    )

}



export default SalesOrderTable