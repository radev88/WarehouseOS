import ProductToolbar from "../components/products/ProductToolbar"
import ProductTable from "../components/products/ProductTable"

function Products(){

return (

<div>


<h1 className="text-3xl font-bold">
Product Master
</h1>


<p className="mt-2 mb-8 text-gray-500">
Manage pharmaceutical packaging materials and finished goods.
</p>


<ProductToolbar />

<ProductTable />


</div>

)

}


export default Products