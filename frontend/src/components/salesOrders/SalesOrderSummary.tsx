import KPICard from "../dashboard/KPICard"

import {
    ClipboardList,
    Truck,
    Users
} from "lucide-react"


function SalesOrderSummary(){

    return (

        <div className="
            grid
            grid-cols-3
            gap-6
            mb-6
        ">


            <KPICard

                title="Open Orders"

                value={0}

                description="Customer orders awaiting processing"

                icon={ClipboardList}

            />


            <KPICard

                title="Pending Shipment"

                value={0}

                description="Orders ready to ship"

                icon={Truck}

            />


            <KPICard

                title="Customers"

                value={0}

                description="Active customers"

                icon={Users}

            />


        </div>

    )

}


export default SalesOrderSummary