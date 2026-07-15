import { useEffect, useState } from "react"

import {
    getInventory
} from "../../api/inventory"

import type {
    InventoryItem
} from "../../api/inventory"

import StatusBadge from "../common/StatusBadge"

import { Link } from "react-router-dom"



function InventoryTable(){


    const [
        inventory,
        setInventory
    ] = useState<InventoryItem[]>([])



    useEffect(()=>{


        async function loadInventory(){

            try{

                const data =
                    await getInventory()


                setInventory(data)

            }

            catch(error){

                console.error(
                    "Inventory error:",
                    error
                )

            }

        }


        loadInventory()


    },[])





    return (

        <div className="
            rounded-xl
            border
            bg-white
            shadow-sm
            overflow-hidden
        ">


            <table className="w-full">


                <thead className="bg-gray-50">


                    <tr>


                        <th className="p-4 text-left">
                            SKU
                        </th>


                        <th className="p-4 text-left">
                            Product
                        </th>


                        <th className="p-4 text-left">
                            Warehouse
                        </th>


                        <th className="p-4 text-left">
                            Location
                        </th>


                        <th className="p-4 text-left">
                            Quantity
                        </th>


                        <th className="p-4 text-left">
                            Status
                        </th>


                        <th className="p-4 text-left">
                            Actions
                        </th>


                    </tr>


                </thead>





                <tbody>


                {
                    inventory.map((item)=>(


                        <tr

                            key={`${item.sku}-${item.location}`}

                            className="
                                border-t
                                hover:bg-gray-50
                            "

                        >



                            <td className="p-4">

                                {item.sku}

                            </td>




                            <td className="p-4 font-medium">

                                {item.product}

                            </td>




                            <td className="p-4">

                                {item.warehouse}

                            </td>




                            <td className="p-4">

                                {item.location}

                            </td>




                            <td className="p-4">

                                {item.quantity.toLocaleString()}

                            </td>




                            <td className="p-4">

                                <StatusBadge
                                    status={item.status}
                                />

                            </td>




                            <td className="p-4">


                                <div className="flex gap-2">


                                    <Link

                                        to="/transfers"

                                        className="
                                        rounded
                                        bg-slate-900
                                        px-3
                                        py-1
                                        text-sm
                                        text-white
                                        hover:bg-slate-700
                                        "

                                    >

                                        Transfer

                                    </Link>




                                    <Link

                                        to="/adjustments"

                                        className="
                                        rounded
                                        bg-gray-200
                                        px-3
                                        py-1
                                        text-sm
                                        hover:bg-gray-300
                                        "

                                    >

                                        Adjust

                                    </Link>


                                </div>


                            </td>



                        </tr>


                    ))
                }



                </tbody>



            </table>



        </div>

    )

}



export default InventoryTable