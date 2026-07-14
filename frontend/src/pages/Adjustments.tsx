import AdjustmentForm from "../components/adjustments/AdjustmentForm"



function Adjustments(){


return (

<div>


<h1 className="text-3xl font-bold">

Inventory Adjustments

</h1>



<p className="mt-2 mb-8 text-gray-500">

Correct inventory quantities and record reasons.

</p>



<AdjustmentForm />


</div>

)

}


export default Adjustments