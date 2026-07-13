import { useEffect, useState } from "react"
import StatusBadge from "../common/StatusBadge"


interface InventoryItem {
  sku: string
  product: string
  warehouse: string
  location: string
  quantity: number
  status: string
}


function InventoryTable() {


  const [inventory, setInventory] = useState<InventoryItem[]>([])


  useEffect(() => {

    fetch("http://127.0.0.1:8000/inventory/")
      .then((response) => response.json())
      .then((data) => {
        setInventory(data)
      })
      .catch((error) => {
        console.error(
          "Inventory fetch error:",
          error
        )
      })

  }, [])



  return (

    <div className="rounded-xl border bg-white p-6 shadow-sm">


      <h2 className="text-lg font-semibold mb-4">
        Inventory Overview
      </h2>


      <table className="w-full">


        <thead>

          <tr className="border-b text-left">

            <th className="p-3">
              SKU
            </th>

            <th className="p-3">
              Product
            </th>

            <th className="p-3">
              Warehouse
            </th>

            <th className="p-3">
              Location
            </th>

            <th className="p-3">
              Quantity
            </th>

            <th className="p-3">
              Status
            </th>

          </tr>

        </thead>



        <tbody>


          {inventory.map((item) => (

            <tr
              key={item.sku}
              className="border-b"
            >

              <td className="p-3">
                {item.sku}
              </td>


              <td className="p-3">
                {item.product}
              </td>


              <td className="p-3">
                {item.warehouse}
              </td>


              <td className="p-3">
                {item.location}
              </td>


              <td className="p-3">
                {item.quantity}
              </td>


              <td className="p-3">
                <StatusBadge status={item.status}/>
              </td>


            </tr>

          ))}


        </tbody>


      </table>


    </div>

  )

}


export default InventoryTable