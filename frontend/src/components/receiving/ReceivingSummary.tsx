import { useEffect, useState } from "react"

import KPICard from "../dashboard/KPICard"

import {
    PackageCheck,
    Clock,
    CheckCircle
} from "lucide-react"

import {
    getReceivingSummary
} from "../../api/receivingSummary"



function ReceivingSummary(){


    const [
        summary,
        setSummary
    ] = useState({

        open_receipts:0,

        pending_receipts:0,

        completed_receipts:0

    })



    useEffect(()=>{


        async function loadSummary(){

            try{

                const data =
                    await getReceivingSummary()

                setSummary(data)

            }

            catch(error){

                console.error(
                    "Receiving summary error:",
                    error
                )

            }

        }


        loadSummary()


    },[])




    return (

        <div className="
            grid
            grid-cols-3
            gap-6
            mb-6
        ">


            <KPICard

                title="Open Receipts"

                value={summary.open_receipts}

                description="Waiting for receiving"

                icon={PackageCheck}

            />



            <KPICard

                title="Pending Receipt"

                value={summary.pending_receipts}

                description="Awaiting inspection"

                icon={Clock}

            />



            <KPICard

                title="Completed Receipts"

                value={summary.completed_receipts}

                description="Successfully received"

                icon={CheckCircle}

            />


        </div>

    )

}


export default ReceivingSummary