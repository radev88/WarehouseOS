import KPICard from "../components/dashboard/KPICard"
import InventoryTable from "../components/dashboard/InventoryTable"
import TransactionList from "../components/dashboard/TransactionList"
import WarehouseStatus from "../components/dashboard/WarehouseStatus"

import {
  Package,
  DollarSign,
  AlertTriangle,
  ClipboardList
} from "lucide-react"

function Dashboard() {

  const kpis = {
    totalProducts: 3,
    inventoryValue: "$52,450",
    lowStock: 1,
    openPOs: 4
  }

  return (
    <div className="space-y-8">

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
        value={kpis.totalProducts}
        description="Active SKUs"
        icon={Package}
    />


    <KPICard
        title="Inventory Value"
        value={kpis.inventoryValue}
        description="Current warehouse value"
        icon={DollarSign}
    />


    <KPICard
        title="Low Stock"
        value={kpis.lowStock}
        description="Items requiring attention"
        icon={AlertTriangle}
    />


    <KPICard
        title="Open Purchase Orders"
        value={kpis.openPOs}
        description="Awaiting fulfillment"
        icon={ClipboardList}
    />


</div>
    <WarehouseStatus />

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