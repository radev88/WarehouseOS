import ProductToolbar from "../components/products/ProductToolbar"
import ProductTable from "../components/products/ProductTable"



function Products(){


    return (

        <div
            className="
                space-y-6
            "
        >


            {/* Page Header */}

            <div>


                <h1
                    className="
                        text-3xl
                        font-bold
                        text-slate-800
                    "
                >

                    Product Master

                </h1>


                <p
                    className="
                        mt-2
                        text-slate-500
                    "
                >

                    Manage pharmaceutical packaging materials, finished goods, and inventory master data.

                </p>


            </div>





            {/* Toolbar */}

            <ProductToolbar />





            {/* Product Table */}

            <ProductTable />



        </div>

    )

}


export default Products