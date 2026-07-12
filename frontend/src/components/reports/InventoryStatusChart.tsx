import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend
} from "recharts"

import { inventoryStatusData } from "../../data/mockReports"
import Card from "../common/Card"

const COLORS = [
  "#16a34a",
  "#2563eb",
  "#9333ea",
  "#ca8a04"
]

function InventoryStatusChart() {

  return (

    <Card title="Inventory Status">

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={inventoryStatusData}
              dataKey="value"
              nameKey="name"
              outerRadius={110}
              label
            >

              {inventoryStatusData.map((_, index) => (

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

export default InventoryStatusChart