import { useState } from "react"

import {
    createTransfer
} from "../../api/transfers"



function TransferForm(){


const [form,setForm]=useState({

product_id:"",

from_location_id:"",

to_location_id:"",

quantity:""

})



function handleChange(
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


await createTransfer({

product_id:Number(form.product_id),

from_location_id:Number(form.from_location_id),

to_location_id:Number(form.to_location_id),

quantity:Number(form.quantity)

})


alert(
"Transfer completed"
)


}



return (

<div className="rounded-xl border bg-white p-6">


<h2 className="text-xl font-semibold mb-6">
Transfer Inventory
</h2>



<form
onSubmit={submit}
className="space-y-4"
>


<input
name="product_id"
placeholder="Product ID"
value={form.product_id}
onChange={handleChange}
className="w-full border p-3 rounded"
/>


<input
name="from_location_id"
placeholder="From Location ID"
value={form.from_location_id}
onChange={handleChange}
className="w-full border p-3 rounded"
/>


<input
name="to_location_id"
placeholder="To Location ID"
value={form.to_location_id}
onChange={handleChange}
className="w-full border p-3 rounded"
/>


<input
name="quantity"
placeholder="Quantity"
value={form.quantity}
onChange={handleChange}
className="w-full border p-3 rounded"
/>


<button
className="bg-slate-900 text-white px-6 py-3 rounded"
>

Transfer

</button>


</form>


</div>

)

}


export default TransferForm