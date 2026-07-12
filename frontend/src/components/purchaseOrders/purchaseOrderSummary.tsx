function PurchaseOrderSummary(){

return (

<div className="grid grid-cols-3 gap-6 mb-6">


<div className="rounded-xl border bg-white p-5">

<p className="text-gray-500">
Open Purchase Orders
</p>

<h2 className="text-3xl font-bold">
18
</h2>

</div>


<div className="rounded-xl border bg-white p-5">

<p className="text-gray-500">
Awaiting Receipt
</p>

<h2 className="text-3xl font-bold">
7
</h2>

</div>


<div className="rounded-xl border bg-white p-5">

<p className="text-gray-500">
Suppliers
</p>

<h2 className="text-3xl font-bold">
12
</h2>

</div>


</div>

)

}

export default PurchaseOrderSummary