import KPICard from "../dashboard/KPICard"
import {
  Package,
  DollarSign,
  Truck,
  AlertTriangle
} from "lucide-react"

function ReportsSummary() {

  return (

    <div className="grid grid-cols-4 gap-6">

      <KPICard
        title="Inventory Value"
        value="$1.82M"
        description="Current warehouse value"
        icon={DollarSign}
      />

      <KPICard
        title="Active SKUs"
        value={248}
        description="Across all warehouses"
        icon={Package}
      />

      <KPICard
        title="Open Receipts"
        value={12}
        description="Awaiting inspection"
        icon={Truck}
      />

      <KPICard
        title="Quality Holds"
        value={6}
        description="Require QA review"
        icon={AlertTriangle}
      />

    </div>

  )

}

export default ReportsSummary