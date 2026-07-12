import { mockProducts } from "../../data/mockProducts"
import StatusBadge from "../common/StatusBadge"

function ProductTable() {


return (

<div className="rounded-xl border bg-white shadow-sm">


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
Category
</th>

<th className="p-4 text-left">
UOM
</th>

<th className="p-4 text-left">
Lot Tracking
</th>

<th className="p-4 text-left">
Expiration
</th>

<th className="p-4 text-left">
Status
</th>

</tr>

</thead>


<tbody>


{mockProducts.map((product)=>(


<tr
key={product.sku}
className="border-t hover:bg-gray-50"
>


<td className="p-4">
{product.sku}
</td>


<td className="p-4 font-medium">
{product.name}
</td>


<td className="p-4">
{product.category}
</td>


<td className="p-4">
{product.uom}
</td>


<td className="p-4">
{product.lotTracked ? "Yes" : "No"}
</td>


<td className="p-4">
{product.expirationTracked ? "Yes" : "No"}
</td>


<td className="p-4">

<StatusBadge status={product.status}/>

</td>


</tr>


))}


</tbody>


</table>


</div>

)

}


export default ProductTable