import ReportsSummary from "../components/reports/ReportsSummary"
import InventoryCategoryChart from "../components/reports/InventoryCategoryChart"
import InventoryStatusChart from "../components/reports/InventoryStatusChart"
import SupplierActivityChart from "../components/reports/SupplierActivityChart"
import RecentActivity from "../components/reports/RecentActivity"

function Reports() {

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Reports & Analytics
        </h1>

        <p className="text-gray-500">
          Business intelligence for warehouse operations.
        </p>

      </div>

      <ReportsSummary />

      <div className="grid grid-cols-2 gap-6">

        <InventoryCategoryChart />

        <InventoryStatusChart />

      </div>

      <SupplierActivityChart />

      <RecentActivity />

    </div>

  )

}

export default Reports