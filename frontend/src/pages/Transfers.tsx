import TransferForm from "../components/transfers/TransferForm"



function Transfers(){


return (

<div>


<h1 className="text-3xl font-bold">

Inventory Transfers

</h1>


<p className="mt-2 mb-8 text-gray-500">

Move inventory between warehouse locations.

</p>



<TransferForm />


</div>

)

}


export default Transfers