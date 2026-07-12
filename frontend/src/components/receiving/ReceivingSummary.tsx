function ReceivingSummary(){

return (

<div className="grid grid-cols-3 gap-6 mb-6">


<div className="rounded-xl border bg-white p-5">

<p className="text-gray-500">
Open Receipts
</p>

<h2 className="text-3xl font-bold">
12
</h2>

</div>


<div className="rounded-xl border bg-white p-5">

<p className="text-gray-500">
Pending Inspection
</p>

<h2 className="text-3xl font-bold">
5
</h2>

</div>


<div className="rounded-xl border bg-white p-5">

<p className="text-gray-500">
Received Today
</p>

<h2 className="text-3xl font-bold">
8
</h2>

</div>


</div>

)

}

export default ReceivingSummary