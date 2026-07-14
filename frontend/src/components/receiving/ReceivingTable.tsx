import { useEffect, useState } from "react"
import StatusBadge from "../common/StatusBadge"
import { getReceiving } from "../../api/receiving"
import type { Receiving } from "../../api/receiving"


function ReceivingTable(){


const [receipts,setReceipts] = useState<Receiving[]>([])



useEffect(()=>{


    async function loadReceiving(){

        try{

            const data = await getReceiving()

            setReceipts(data)

        }
        catch(error){

            console.error(
                "Receiving error:",
                error
            )

        }

    }


    loadReceiving()


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
Date
</th>


<th className="p-4 text-left">
Items
</th>


<th className="p-4 text-left">
Status
</th>


</tr>

</thead>



<tbody>


{receipts.map((receipt)=>(


<tr
key={receipt.id}
className="border-t hover:bg-gray-50"
>


<td className="p-4 font-medium">

PO-{receipt.purchase_order_id}

</td>



<td className="p-4">

{receipt.supplier}

</td>



<td className="p-4">

{
new Date(
receipt.received_date
)
.toLocaleDateString()

}

</td>



<td className="p-4">

{receipt.items}

</td>



<td className="p-4">

<StatusBadge 
status={receipt.status}
/>

</td>


</tr>


))}


</tbody>


</table>


</div>

)

}


export default ReceivingTable