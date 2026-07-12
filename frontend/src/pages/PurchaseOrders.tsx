import PurchaseOrderSummary from "../components/purchaseOrders/purchaseOrderSummary"
import PurchaseOrderTable from "../components/purchaseOrders/purchaseOrderTable"


function PurchaseOrders(){

return (

<div>

<h1 className="text-3xl font-bold">
Purchase Orders
</h1>


<p className="mt-2 mb-8 text-gray-500">
Manage supplier orders and inbound material planning.
</p>


<PurchaseOrderSummary />

<PurchaseOrderTable />


</div>

)

}


export default PurchaseOrders