import { useEffect, useState } from "react"

import {
    getReceivingSummary
} from "../../api/receivingSummary"



function ReceivingSummary(){


const [summary,setSummary] =
useState({

    open_receipts: 0,

    pending_receipts: 0,

    completed_receipts: 0

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

<div className="grid grid-cols-3 gap-6 mb-6">


<div className="rounded-xl border bg-white p-5">

<p className="text-gray-500">
Open Receipts
</p>

<h2 className="text-3xl font-bold">
{summary.open_receipts}
</h2>

</div>



<div className="rounded-xl border bg-white p-5">

<p className="text-gray-500">
Pending Receipt
</p>

<h2 className="text-3xl font-bold">
{summary.pending_receipts}
</h2>

</div>



<div className="rounded-xl border bg-white p-5">

<p className="text-gray-500">
Completed Receipts
</p>

<h2 className="text-3xl font-bold">
{summary.completed_receipts}
</h2>

</div>


</div>

)

}


export default ReceivingSummary