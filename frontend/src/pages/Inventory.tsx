import InventoryToolbar from "../components/inventory/InventoryToolbar"
import InventoryTable from "../components/inventory/InventoryTable"


function Inventory(){

return (

<div>

<h1 className="text-3xl font-bold">
Inventory
</h1>


<p className="text-gray-500 mt-2 mb-8">
Monitor inventory levels across warehouses.
</p>


<InventoryToolbar />


<InventoryTable />


</div>

)

}


export default Inventory