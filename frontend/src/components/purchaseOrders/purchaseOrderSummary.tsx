import { useEffect, useState } from "react"

import KPICard from "../dashboard/KPICard"

import {
    ClipboardList,
    Clock,
    CheckCircle
} from "lucide-react"

import {
    getPurchaseOrders
} from "../../api/purchaseOrders"

import type {
    PurchaseOrder
} from "../../api/purchaseOrders"



function PurchaseOrderSummary(){


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
                    "Purchase order summary error:",
                    error
                )

            }

        }


        loadOrders()


    },[])



    const totalOrders =
        orders.length



    const openOrders =
        orders.filter(
            (order)=>
                order.status === "OPEN" ||
                order.status === "Open"
        ).length



    const completedOrders =
        orders.filter(
            (order)=>
                order.status === "COMPLETED" ||
                order.status === "Completed"
        ).length





    return (

        <div className="
            grid
            grid-cols-3
            gap-6
            mb-6
        ">


            <KPICard

                title="Total Purchase Orders"

                value={totalOrders}

                description="All supplier orders"

                icon={ClipboardList}

            />



            <KPICard

                title="Open Orders"

                value={openOrders}

                description="Awaiting completion"

                icon={Clock}

            />



            <KPICard

                title="Completed Orders"

                value={completedOrders}

                description="Finished purchase orders"

                icon={CheckCircle}

            />


        </div>

    )

}


export default PurchaseOrderSummary