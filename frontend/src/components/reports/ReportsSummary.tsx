import { useEffect, useState } from "react"

import KPICard from "../dashboard/KPICard"

import {
    Package,
    DollarSign,
    Truck,
    AlertTriangle
} from "lucide-react"

import {
    getReportsSummary
} from "../../api/reports"



function ReportsSummary(){


    const [summary,setSummary] = useState({

        inventory_value:0,

        active_skus:0,

        open_receipts:0,

        quality_holds:0

    })



    useEffect(()=>{


        async function loadSummary(){

            try{

                const data =
                    await getReportsSummary()


                setSummary(data)

            }

            catch(error){

                console.error(
                    "Reports summary error:",
                    error
                )

            }

        }


        loadSummary()


    },[])




    return (

        <div className="
            grid
            grid-cols-4
            gap-6
        ">


            <KPICard

                title="Inventory Value"

                value={
                    `$${summary.inventory_value.toLocaleString()}`
                }

                description="Current warehouse value"

                icon={DollarSign}

            />



            <KPICard

                title="Active SKUs"

                value={summary.active_skus}

                description="Across all warehouses"

                icon={Package}

            />



            <KPICard

                title="Open Receipts"

                value={summary.open_receipts}

                description="Awaiting inspection"

                icon={Truck}

            />



            <KPICard

                title="Quality Holds"

                value={summary.quality_holds}

                description="Require QA review"

                icon={AlertTriangle}

            />


        </div>

    )

}


export default ReportsSummary