import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend
} from "recharts"

import { inventoryCategoryData } from "../../data/mockReports"
import Card from "../common/Card"

const COLORS = [
  "#2563eb",
  "#10b981",
  "#f59e0b",
  "#8b5cf6"
]

function InventoryCategoryChart() {
  return (

    <Card title="Inventory by Category">

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={inventoryCategoryData}
              dataKey="value"
              nameKey="name"
              outerRadius={110}
              label
            >

              {inventoryCategoryData.map((_, index) => (

                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />

              ))}

            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </Card>

  )
}

export default InventoryCategoryChart