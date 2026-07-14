import { useEffect, useState } from "react"

import {
    getInventory,
} from "../../api/inventory"

import type {
    InventoryItem
} from "../../api/inventory"

import StatusBadge from "../common/StatusBadge"

import { Link } from "react-router-dom"



function InventoryTable(){


    const [inventory, setInventory] =
        useState<InventoryItem[]>([])



    useEffect(() => {


        async function loadInventory(){

            try{

                const data = await getInventory()

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


    }, [])



    return (

        <div className="
            rounded-xl
            border
            bg-white
            shadow-sm
            overflow-hidden
        ">


            <div className="p-6">

                <h2 className="text-lg font-semibold">
                    Inventory Overview
                </h2>

            </div>



            <div className="overflow-x-auto">


                <table className="
                    w-full
                    min-w-[950px]
                ">


                    <thead className="bg-gray-50">


                        <tr>


                            <th className="p-4 text-left whitespace-nowrap">
                                SKU
                            </th>


                            <th className="p-4 text-left whitespace-nowrap">
                                Product
                            </th>


                            <th className="p-4 text-left whitespace-nowrap">
                                Warehouse
                            </th>


                            <th className="p-4 text-left whitespace-nowrap">
                                Location
                            </th>


                            <th className="p-4 text-left whitespace-nowrap">
                                Quantity
                            </th>


                            <th className="p-4 text-left whitespace-nowrap">
                                Status
                            </th>


                            <th className="p-4 text-left whitespace-nowrap">
                                Actions
                            </th>


                        </tr>


                    </thead>




                    <tbody>


                        {inventory.map((item)=>(


                            <tr

                                key={item.id}

                                className="
                                    border-t
                                    hover:bg-gray-50
                                "

                            >



                                <td className="
                                    p-4
                                    whitespace-nowrap
                                ">
                                    {item.sku}
                                </td>



                                <td className="
                                    p-4
                                    whitespace-nowrap
                                ">
                                    {item.product}
                                </td>



                                <td className="
                                    p-4
                                    whitespace-nowrap
                                ">
                                    {item.warehouse}
                                </td>



                                <td className="
                                    p-4
                                    whitespace-nowrap
                                ">
                                    {item.location}
                                </td>



                                <td className="
                                    p-4
                                    whitespace-nowrap
                                ">
                                    {item.quantity}
                                </td>



                                <td className="
                                    p-4
                                    whitespace-nowrap
                                ">

                                    <StatusBadge
                                        status={item.status}
                                    />

                                </td>




                                <td className="p-4">


                                    <div className="
                                        flex
                                        gap-2
                                        whitespace-nowrap
                                    ">


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


                        ))}


                    </tbody>


                </table>


            </div>


        </div>

    )

}


export default InventoryTable