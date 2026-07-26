import { useEffect, useState } from "react"

import {
    getWarehouseStatus
} from "../../api/warehouse"

import type {
    WarehouseStatus as WarehouseStatusType
} from "../../api/warehouse"

import StatusBadge from "../common/StatusBadge"



function WarehouseStatus(){


    const [
        warehouses,
        setWarehouses
    ] = useState<WarehouseStatusType[]>([])



    const [
        loading,
        setLoading
    ] = useState(true)



    const [
        error,
        setError
    ] = useState("")



    useEffect(()=>{


        async function loadWarehouses(){


            try{


                const data =
                    await getWarehouseStatus()


                setWarehouses(data)


            }


            catch(error){


                console.error(
                    "Warehouse status error:",
                    error
                )


                setError(
                    "Unable to load warehouse information"
                )


            }


            finally{


                setLoading(false)


            }


        }



        loadWarehouses()


    },[])





    function getProgressColor(
        utilization: number
    ){


        if(utilization >= 100){

            return "bg-red-500"

        }


        if(utilization >= 80){

            return "bg-yellow-500"

        }


        return "bg-green-500"


    }





    if(loading){


        return (

            <div className="rounded-xl border bg-white p-6 shadow-sm">

                Loading warehouse data...

            </div>

        )

    }





    if(error){


        return (

            <div className="rounded-xl border bg-white p-6 shadow-sm text-red-500">

                {error}

            </div>

        )

    }





    return (

        <div className="rounded-xl border bg-white p-6 shadow-sm">


            <div className="flex items-center justify-between mb-6">


                <h2 className="text-lg font-semibold">

                    Warehouse Overview

                </h2>


                <span className="text-sm text-gray-500">

                    Capacity utilization

                </span>


            </div>





            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">


                {
                    warehouses.map((warehouse)=>(


                        <div

                            key={warehouse.warehouse}

                            className="
                                rounded-xl
                                border
                                p-5
                                hover:shadow-md
                                transition
                            "

                        >


                            <div className="flex items-start justify-between mb-5">


                                <div>


                                    <h3 className="font-semibold text-gray-800">

                                        {warehouse.warehouse}

                                    </h3>


                                    <p className="text-sm text-gray-500 mt-1">

                                        Warehouse capacity

                                    </p>


                                </div>


                                <StatusBadge
                                    status={warehouse.status}
                                />


                            </div>





                            <div className="mb-4">


                                <div className="flex items-end justify-between">


                                    <div>


                                        <p className="text-3xl font-bold text-slate-800">

                                            {warehouse.units.toLocaleString()}

                                        </p>


                                        <p className="text-sm text-gray-500">

                                            Units stored

                                        </p>


                                    </div>


                                    <div className="text-right">


                                        <p className="text-sm font-medium text-gray-700">

                                            {warehouse.capacity.toLocaleString()}

                                        </p>


                                        <p className="text-sm text-gray-500">

                                            Max capacity

                                        </p>


                                    </div>


                                </div>


                            </div>





                            <div className="w-full bg-gray-200 rounded-full h-3">


                                <div

                                    className={`
                                        h-3
                                        rounded-full
                                        ${getProgressColor(
                                            warehouse.utilization
                                        )}
                                    `}

                                    style={{

                                        width:
                                        `${Math.min(
                                            warehouse.utilization,
                                            100
                                        )}%`

                                    }}

                                />


                            </div>





                            <div className="flex justify-between mt-3 text-sm">


                                <span className="text-gray-500">

                                    Utilization

                                </span>


                                <span className="font-semibold">

                                    {warehouse.utilization}%

                                </span>


                            </div>



                        </div>


                    ))

                }


            </div>


        </div>

    )

}



export default WarehouseStatus