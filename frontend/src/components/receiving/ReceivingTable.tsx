import { mockReceiving } from "../../data/mockReceiving"
import StatusBadge from "../common/StatusBadge"


function ReceivingTable(){

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


{mockReceiving.map(receipt=>(

<tr
key={receipt.poNumber}
className="border-t hover:bg-gray-50"
>


<td className="p-4">
{receipt.poNumber}
</td>


<td className="p-4">
{receipt.supplier}
</td>


<td className="p-4">
{receipt.receivedDate}
</td>


<td className="p-4">
{receipt.items}
</td>


<td className="p-4">

<StatusBadge status={receipt.status}/>

</td>


</tr>

))}


</tbody>


</table>


</div>

)

}

export default ReceivingTable