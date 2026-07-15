import { useEffect, useState } from "react"

import StatusBadge from "../common/StatusBadge"

import {
    getProducts
} from "../../api/products"

import type {
    Product
} from "../../api/products"



function ProductTable(){


    const [
        products,
        setProducts
    ] = useState<Product[]>([])



    useEffect(()=>{


        async function loadProducts(){

            try{

                const data =
                    await getProducts()


                setProducts(data)

            }

            catch(error){

                console.error(
                    "Products error:",
                    error
                )

            }

        }


        loadProducts()


    },[])




    return (

        <div className="rounded-xl border bg-white shadow-sm">


            <table className="w-full">


                <thead className="bg-gray-50">


                    <tr>


                        <th className="p-4 text-left">
                            SKU
                        </th>


                        <th className="p-4 text-left">
                            Product
                        </th>


                        <th className="p-4 text-left">
                            Category
                        </th>


                        <th className="p-4 text-left">
                            Unit Cost
                        </th>


                        <th className="p-4 text-left">
                            Status
                        </th>


                    </tr>


                </thead>




                <tbody>


                {products.map((product)=>(


                    <tr

                        key={product.id}

                        className="border-t hover:bg-gray-50"

                    >



                        <td className="p-4">

                            {product.sku}

                        </td>




                        <td className="p-4 font-medium">

                            {product.name}

                        </td>




                        <td className="p-4">

                            {product.category}

                        </td>




                        <td className="p-4">

                            ${product.unit_cost.toFixed(2)}

                        </td>




                        <td className="p-4">

                            <StatusBadge
                                status="Available"
                            />

                        </td>



                    </tr>


                ))}



                </tbody>



            </table>



        </div>

    )

}



export default ProductTable