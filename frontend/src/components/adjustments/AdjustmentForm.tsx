import { useState } from "react"

import {
createAdjustment
} from "../../api/adjustments"



function AdjustmentForm(){


const [form,setForm]=useState({

product_id:"",

location_id:"",

new_quantity:"",

reason:""

})



function change(
e:React.ChangeEvent<HTMLInputElement>
){

setForm({

...form,

[e.target.name]:e.target.value

})

}



async function submit(
e:React.FormEvent
){

e.preventDefault()


await createAdjustment({

product_id:Number(form.product_id),

location_id:Number(form.location_id),

new_quantity:Number(form.new_quantity),

reason:form.reason

})


alert(
"Inventory adjusted"
)

}



return (

<div className="rounded-xl border bg-white p-6">


<h2 className="text-xl font-semibold mb-6">
Adjust Inventory
</h2>


<form
onSubmit={submit}
className="space-y-4"
>


<input
name="product_id"
placeholder="Product ID"
value={form.product_id}
onChange={change}
className="w-full border p-3 rounded"
/>


<input
name="location_id"
placeholder="Location ID"
value={form.location_id}
onChange={change}
className="w-full border p-3 rounded"
/>


<input
name="new_quantity"
placeholder="New Quantity"
value={form.new_quantity}
onChange={change}
className="w-full border p-3 rounded"
/>


<input
name="reason"
placeholder="Reason"
value={form.reason}
onChange={change}
className="w-full border p-3 rounded"
/>


<button
className="bg-slate-900 text-white px-6 py-3 rounded"
>

Adjust

</button>


</form>


</div>

)

}


export default AdjustmentForm