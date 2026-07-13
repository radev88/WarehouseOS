import { useEffect, useState } from "react"
import { getInventory } from "../../api/inventory"


type InventoryItem = {
  sku:string
  product:string
  warehouse:string
  location:string
  quantity:number
}


function InventoryTable(){

  const [inventory,setInventory] = useState<InventoryItem[]>([])


  useEffect(()=>{

    getInventory()
      .then(data=>{
        setInventory(data)
      })

  },[])


  return (

    <div className="rounded-xl border bg-white shadow-sm">

      <div className="border-b p-5">

        <h2 className="text-lg font-semibold">
          Inventory Overview
        </h2>

      </div>


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
              Warehouse
            </th>

            <th className="p-4 text-left">
              Location
            </th>

            <th className="p-4 text-left">
              Quantity
            </th>

          </tr>

        </thead>


        <tbody>

          {inventory.map((item)=>(
            
            <tr 
              key={item.sku}
              className="border-t"
            >

              <td className="p-4">
                {item.sku}
              </td>

              <td className="p-4 font-medium">
                {item.product}
              </td>

              <td className="p-4">
                {item.warehouse}
              </td>

              <td className="p-4">
                {item.location}
              </td>

              <td className="p-4">
                {item.quantity}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )

}


export default InventoryTable