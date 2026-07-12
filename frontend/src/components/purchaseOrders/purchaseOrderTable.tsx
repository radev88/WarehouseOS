import { mockPurchaseOrders } from "../../data/mockPurchaseOrders"
import StatusBadge from "../common/StatusBadge"


function PurchaseOrderTable(){

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
Order Date
</th>

<th className="p-4 text-left">
Expected
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

{mockPurchaseOrders.map((po)=>(

<tr
key={po.poNumber}
className="border-t hover:bg-gray-50"
>


<td className="p-4 font-medium">
{po.poNumber}
</td>


<td className="p-4">
{po.supplier}
</td>


<td className="p-4">
{po.orderDate}
</td>


<td className="p-4">
{po.expectedDate}
</td>


<td className="p-4">
{po.totalItems}
</td>


<td className="p-4">

<StatusBadge status={po.status}/>

</td>


</tr>

))}


</tbody>


</table>


</div>

)

}

export default PurchaseOrderTable