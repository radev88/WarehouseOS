import KPICard from "../components/dashboard/KPICard"
import InventoryTable from "../components/dashboard/InventoryTable"
import TransactionList from "../components/dashboard/TransactionList"
import WarehouseStatus from "../components/dashboard/WarehouseStatus"
import StatusBadge from "../components/common/StatusBadge"

import {
  Package,
  DollarSign,
  AlertTriangle,
  ClipboardList
} from "lucide-react"


function Dashboard() {

  const kpis = {
    activeSKUs: 248,
    inventoryValue: "$1.8M",
    qualityHolds: 6,
    expiringItems: 14
  }


  const inventoryStatus = [
    {
      label: "Available",
      count: 184
    },
    {
      label: "Released",
      count: 52
    },
    {
      label: "Quality Hold",
      count: 6
    },
    {
      label: "Pending Inspection",
      count: 8
    },
    {
      label: "Low Stock",
      count: 12
    }

  ]


  return (

    <div className="space-y-8">


      {/* Page Header */}
      <div>

        <h1 className="text-3xl font-bold">
          Warehouse Dashboard
        </h1>


        <p className="text-gray-500">
          Real-time overview of warehouse operations.
        </p>

      </div>



      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6">


        <KPICard
          title="Products"
          value={kpis.activeSKUs}
          description="Active SKUs"
          icon={Package}
        />


        <KPICard
          title="Inventory Value"
          value={kpis.inventoryValue}
          description="Packaging materials and finished goods"
          icon={DollarSign}
        />


        <KPICard
          title="Quality Holds"
          value={kpis.qualityHolds}
          description="Items pending QA release"
          icon={AlertTriangle}
        />


        <KPICard
          title="Expiring Items"
          value={kpis.expiringItems}
          description="Items nearing expiration"
          icon={ClipboardList}
        />


      </div>



      {/* Warehouse Overview */}
      <WarehouseStatus />



      {/* Inventory Status */}
      <div className="rounded-xl border bg-white p-6 shadow-sm">


        <h2 className="text-lg font-semibold mb-4">
          Inventory Status
        </h2>


        <div className="grid grid-cols-4 gap-4">


          {inventoryStatus.map((item) => (

            <div
              key={item.label}
              className="
                flex
                items-center
                justify-between
                rounded-lg
                border
                p-4
              "
            >

              <StatusBadge status={item.label} />


              <span className="text-xl font-bold">
                {item.count}
              </span>


            </div>

          ))}


        </div>


      </div>




      {/* Inventory + Transactions */}
      <div className="grid grid-cols-3 gap-6">


        <div className="col-span-2">

          <InventoryTable />

        </div>


        <TransactionList />


      </div>



    </div>

  )

}


export default Dashboard