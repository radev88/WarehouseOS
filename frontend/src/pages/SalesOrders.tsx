import SalesOrderSummary from "../components/salesOrders/SalesOrderSummary"
import SalesOrderTable from "../components/salesOrders/SalesOrderTable"



function SalesOrders(){


return (

<div>


<h1 className="text-3xl font-bold">
Sales Orders
</h1>


<p className="mt-2 mb-8 text-gray-500">
Manage customer orders, fulfillment, and inventory demand.
</p>


<SalesOrderSummary />


<SalesOrderTable />


</div>

)

}


export default SalesOrders