import Card from "../common/Card"
import { recentActivity } from "../../data/mockReports"

function RecentActivity() {

  return (

    <Card title="Recent Warehouse Activity">

      <div className="space-y-4">

        {recentActivity.map((activity, index) => (

          <div
            key={index}
            className="border-b pb-3 last:border-none"
          >

            <p className="font-medium">
              {activity.activity}
            </p>

            <p className="text-sm text-gray-500">
              {activity.time}
            </p>

          </div>

        ))}

      </div>

    </Card>

  )

}

export default RecentActivity