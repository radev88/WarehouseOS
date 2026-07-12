import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

import { supplierActivity } from "../../data/mockReports"
import Card from "../common/Card"

function SupplierActivityChart() {

  return (

    <Card title="Top Suppliers by Open Purchase Orders">

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={supplierActivity}>

            <XAxis dataKey="supplier" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="orders"
              fill="#2563eb"
              radius={[6, 6, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </Card>

  )

}

export default SupplierActivityChart