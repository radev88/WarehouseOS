type InventoryItem = {
  sku: string
  product: string
  warehouse: string
  quantity: number
  status: string
}

const inventory: InventoryItem[] = [
  {
    sku: "RM-1001",
    product: "Steel Bracket",
    warehouse: "Orlando DC",
    quantity: 450,
    status: "In Stock",
  },
  {
    sku: "FG-2001",
    product: "Motor Assembly",
    warehouse: "Miami Facility",
    quantity: 120,
    status: "In Stock",
  },
  {
    sku: "RM-3001",
    product: "Bearing Kit",
    warehouse: "Orlando DC",
    quantity: 18,
    status: "Low Stock",
  },
]


function InventoryTable() {

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

            <th className="p-4 text-left text-sm">
              SKU
            </th>

            <th className="p-4 text-left text-sm">
              Product
            </th>

            <th className="p-4 text-left text-sm">
              Warehouse
            </th>

            <th className="p-4 text-left text-sm">
              Quantity
            </th>

            <th className="p-4 text-left text-sm">
              Status
            </th>

          </tr>

        </thead>


        <tbody>

          {inventory.map((item) => (

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
                {item.quantity}
              </td>


              <td className="p-4">

                <span
                  className={
                    item.status === "Low Stock"
                    ? "rounded-full bg-red-100 px-3 py-1 text-sm text-red-700"
                    : "rounded-full bg-green-100 px-3 py-1 text-sm text-green-700"
                  }
                >
                  {item.status}
                </span>

              </td>


            </tr>

          ))}


        </tbody>


      </table>


    </div>

  )
}


export default InventoryTable