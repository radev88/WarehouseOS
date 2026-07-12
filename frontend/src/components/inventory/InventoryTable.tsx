import StatusBadge from "../common/StatusBadge"

type InventoryItem = {
  sku: string
  product: string
  warehouse: string
  location: string
  quantity: number
  status: string
}


const inventory: InventoryItem[] = [

  {
    sku: "PKG-1001",
    product: "30mL Amber Glass Bottle",
    warehouse: "Orlando Pharma DC",
    location: "RM-A-01-02",
    quantity: 25000,
    status: "Available"
  },

  {
    sku: "PKG-2005",
    product: "Child Resistant Cap",
    warehouse: "Orlando Pharma DC",
    location: "PKG-A-02-04",
    quantity: 40000,
    status: "Available"
  },

  {
    sku: "FG-5001",
    product: "Vitamin Supplement Bottle 30ct",
    warehouse: "Finished Goods Area",
    location: "FG-C-02-01",
    quantity: 1200,
    status: "Released"
  },

  {
    sku: "RM-3010",
    product: "HDPE Resin",
    warehouse: "Raw Material Storage",
    location: "RM-B-01-03",
    quantity: 5500,
    status: "Quality Hold"
  }

]


function InventoryTable() {

  return (

    <div className="bg-white border rounded-xl shadow-sm overflow-hidden">


      <table className="w-full text-left">


        <thead className="bg-gray-50">

          <tr>

            <th className="p-4 text-sm font-semibold">
              SKU
            </th>

            <th className="p-4 text-sm font-semibold">
              Product
            </th>

            <th className="p-4 text-sm font-semibold">
              Warehouse
            </th>

            <th className="p-4 text-sm font-semibold">
              Location
            </th>

            <th className="p-4 text-sm font-semibold">
              Quantity
            </th>

            <th className="p-4 text-sm font-semibold">
              Status
            </th>

          </tr>

        </thead>


        <tbody>


          {inventory.map((item) => (

            <tr
              key={item.sku}
              className="border-t hover:bg-gray-50"
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
                {item.quantity.toLocaleString()}
              </td>


            <td className="p-4">

                <StatusBadge status={item.status} />

            </td>


            </tr>

          ))}


        </tbody>


      </table>


    </div>

  )

}


export default InventoryTable