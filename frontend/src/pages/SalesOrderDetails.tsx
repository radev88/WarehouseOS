import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import StatusBadge from "../components/common/StatusBadge"

import {
    getSalesOrder,
    pickSalesOrder,
    fulfillSalesOrder
} from "../api/salesOrders"

import type {
    SalesOrder
} from "../api/salesOrders"



function SalesOrderDetails(){


    const {
        id
    } = useParams()



    const [
        order,
        setOrder
    ] = useState<SalesOrder | null>(null)



    const [
        loading,
        setLoading
    ] = useState(true)



    async function loadOrder(){

        if(!id)
            return


        try{

            const data = await getSalesOrder(
                Number(id)
            )


            setOrder(data)

        }

        catch(error){

            console.error(
                "Sales order loading error:",
                error
            )

        }

        finally{

            setLoading(false)

        }

    }




    useEffect(()=>{

        const load = async()=>{

            await loadOrder()

        }


        load()

    },[id])






    async function handlePick(){

        if(!order)
            return


        try{

            await pickSalesOrder(
                order.id
            )


            await loadOrder()

        }

        catch(error){

            console.error(
                "Pick error:",
                error
            )


            alert(
                "Unable to pick order"
            )

        }

    }







    async function handleFulfill(){

        if(!order)
            return


        try{

            await fulfillSalesOrder(
                order.id
            )


            await loadOrder()

        }

        catch(error){

            console.error(
                "Fulfillment error:",
                error
            )


            alert(
                "Unable to fulfill order"
            )

        }

    }






    if(loading){

        return (

            <div>
                Loading...
            </div>

        )

    }






    if(!order){

        return (

            <div>
                Sales order not found
            </div>

        )

    }






    return (

        <div className="space-y-6">



            <h1 className="text-3xl font-bold">

                Sales Order SO-{order.id}

            </h1>





            <div className="rounded-xl border bg-white p-6">


                <div className="flex justify-between">


                    <div>

                        <p className="text-gray-500">
                            Customer
                        </p>


                        <p className="text-xl font-semibold">

                            Customer #{order.customer_id}

                        </p>


                    </div>




                    <div>

                        <p className="text-gray-500">
                            Status
                        </p>


                        <StatusBadge
                            status={order.status}
                        />


                    </div>



                </div>



            </div>







            <div className="rounded-xl border bg-white">



                <table className="w-full">



                    <thead className="bg-gray-50">


                        <tr>

                            <th className="p-4 text-left">
                                Product
                            </th>


                            <th className="p-4 text-left">
                                Quantity
                            </th>


                            <th className="p-4 text-left">
                                Picked
                            </th>


                        </tr>


                    </thead>





                    <tbody>


                    {
                        order.items.map(item=>(


                            <tr

                                key={item.id}

                                className="border-t"

                            >


                                <td className="p-4">

                                    Product #{item.product_id}

                                </td>




                                <td className="p-4">

                                    {item.quantity}

                                </td>




                                <td className="p-4">

                                    {item.picked_quantity}

                                </td>


                            </tr>


                        ))
                    }



                    </tbody>



                </table>



            </div>







            {
                order.status === "OPEN" &&


                <button

                    onClick={handlePick}

                    className="
                    bg-yellow-500
                    text-white
                    px-5
                    py-3
                    rounded-lg
                    hover:bg-yellow-600
                    "

                >

                    Pick Order

                </button>

            }








            {
                order.status === "READY TO SHIP" &&


                <button

                    onClick={handleFulfill}

                    className="
                    bg-blue-600
                    text-white
                    px-5
                    py-3
                    rounded-lg
                    hover:bg-blue-700
                    "

                >

                    Fulfill Order

                </button>

            }





        </div>

    )

}



export default SalesOrderDetails