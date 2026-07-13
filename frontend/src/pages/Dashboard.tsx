import { useEffect, useState } from "react"

import KPICard from "../components/dashboard/KPICard"
import InventoryTable from "../components/dashboard/InventoryTable"
import TransactionList from "../components/dashboard/TransactionList"
import WarehouseStatus from "../components/dashboard/WarehouseStatus"
import StatusBadge from "../components/common/StatusBadge"

import { getDashboardStats } from "../api/dashboard"
import { getInventoryStatus } from "../api/inventoryStatus"

import {
  Package,
  DollarSign,
  AlertTriangle,
  ClipboardList
} from "lucide-react"

function Dashboard() {

  const [stats, setStats] = useState({
    total_units: 0,
    total_skus: 0,
    low_stock: 0,
    warehouses: 0
  })

  const [inventoryStatus, setInventoryStatus] = useState({
    available: 0,
    low_stock: 0,
    out_of_stock: 0
  })

  useEffect(() => {

    async function loadDashboard() {

      try {

        const dashboard = await getDashboardStats()
        setStats(dashboard)

        const status = await getInventoryStatus()
        setInventoryStatus(status)

      } catch (error) {

        console.error("Dashboard error:", error)

      }

    }

    loadDashboard()

  }, [])

  const inventoryStatusCards = [
    {
      label: "Available",
      count: inventoryStatus.available
    },
    {
      label: "Low Stock",
      count: inventoryStatus.low_stock
    },
    {
      label: "Out of Stock",
      count: inventoryStatus.out_of_stock
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
          value={stats.total_skus}
          description="Active SKUs"
          icon={Package}
        />

        <KPICard
          title="Inventory Units"
          value={stats.total_units}
          description="Total units in stock"
          icon={DollarSign}
        />

        <KPICard
          title="Low Stock"
          value={stats.low_stock}
          description="Items requiring attention"
          icon={AlertTriangle}
        />

        <KPICard
          title="Warehouses"
          value={stats.warehouses}
          description="Active warehouse locations"
          icon={ClipboardList}
        />

      </div>

      {/* Warehouse Overview */}
      <WarehouseStatus />

      {/* Inventory Status */}
      <div className="rounded-xl border bg-white p-6 shadow-sm">

        <h2 className="mb-4 text-lg font-semibold">
          Inventory Status
        </h2>

        <div className="grid grid-cols-3 gap-4">

          {inventoryStatusCards.map((item) => (

            <div
              key={item.label}
              className="flex items-center justify-between rounded-lg border p-4"
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