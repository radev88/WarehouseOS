import ReceivingSummary from "../components/receiving/ReceivingSummary"
import ReceivingTable from "../components/receiving/ReceivingTable"


function Receiving(){

return (

<div>


<h1 className="text-3xl font-bold">
Receiving
</h1>


<p className="mt-2 mb-8 text-gray-500">
Manage incoming materials, inspections, and warehouse receipts.
</p>


<ReceivingSummary />

<ReceivingTable />


</div>

)

}


export default Receiving