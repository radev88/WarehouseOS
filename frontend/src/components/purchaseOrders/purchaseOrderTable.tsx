import { useEffect, useState } from "react"

import StatusBadge from "../common/StatusBadge"

import {
    getPurchaseOrders
} from "../../api/purchaseOrders"

import type {
    PurchaseOrder
} from "../../api/purchaseOrders"



function PurchaseOrderTable(){


    const [
        orders,
        setOrders
    ] = useState<PurchaseOrder[]>([])



    useEffect(()=>{


        async function loadOrders(){

            try{

                const data =
                    await getPurchaseOrders()


                setOrders(data)

            }

            catch(error){

                console.error(
                    "Purchase order error:",
                    error
                )

            }

        }


        loadOrders()


    },[])





    return (

        <div className="rounded-xl border bg-white shadow-sm">


            <table className="w-full">


                <thead className="bg-gray-50">


                    <tr>


                        <th className="p-4 text-left">
                            PO Number
                        </th>


                        <th className="p-4 text-left">
                            Supplier
                        </th>


                        <th className="p-4 text-left">
                            Created
                        </th>


                        <th className="p-4 text-left">
                            Status
                        </th>


                    </tr>


                </thead>





                <tbody>


                {
                    orders.map((po)=>(


                        <tr

                            key={po.id}

                            className="
                            border-t
                            hover:bg-gray-50
                            "

                        >



                            <td className="p-4 font-medium">

                                PO-{po.id}

                            </td>




                            <td className="p-4">

                                Supplier #{po.supplier_id}

                            </td>




                            <td className="p-4">

                                {
                                    new Date(
                                        po.created_at
                                    ).toLocaleDateString()
                                }

                            </td>




                            <td className="p-4">

                                <StatusBadge
                                    status={po.status}
                                />

                            </td>



                        </tr>


                    ))
                }



                </tbody>



            </table>



        </div>

    )

}



export default PurchaseOrderTable