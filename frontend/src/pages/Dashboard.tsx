import { useEffect, useState } from "react"

import KPICard from "../components/dashboard/KPICard"
import InventoryTable from "../components/dashboard/InventoryTable"
import TransactionList from "../components/dashboard/TransactionList"
import WarehouseStatus from "../components/dashboard/WarehouseStatus"
import StatusBadge from "../components/common/StatusBadge"

import { getDashboardStats } from "../api/dashboard"

import {
  Package,
  DollarSign,
  AlertTriangle,
  ClipboardList,
  Truck,
  ArrowRightLeft,
  Settings
} from "lucide-react"



interface DashboardStats {

  total_units: number
  total_skus: number
  inventory_value: number
  low_stock: number
  out_of_stock: number
  warehouses: number

  monthly_activity: {
    receipts: number
    transfers: number
    adjustments: number
  }

  top_movers: {
    product: string
    movement: number
  }[]

  inventoryStatus: {
    label: string
    count: number
  }[]

}



function Dashboard() {


  const [stats, setStats] =
    useState<DashboardStats | null>(null)



  useEffect(() => {


    async function loadDashboard(){

      try{

        const dashboard =
          await getDashboardStats()

        setStats(dashboard)

      }
      catch(error){

        console.error(
          "Dashboard error:",
          error
        )

      }

    }


    loadDashboard()


  },[])



  if(!stats){

    return (

      <div>
        Loading dashboard...
      </div>

    )

  }



  return (

    <div className="space-y-8 min-w-0">



      <div>

        <h1 className="text-3xl font-bold">
          Warehouse Dashboard
        </h1>


        <p className="text-gray-500">
          Real-time overview of warehouse operations.
        </p>


      </div>





      {/* KPI Cards */}

      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-6
      ">


        <KPICard
          title="Products"
          value={stats.total_skus}
          description="Active SKUs"
          icon={Package}
        />


        <KPICard
          title="Inventory Units"
          value={stats.total_units}
          description="Units currently stored"
          icon={ClipboardList}
        />


        <KPICard
          title="Inventory Value"
          value={`$${stats.inventory_value.toLocaleString()}`}
          description="Current stock value"
          icon={DollarSign}
        />


        <KPICard
          title="Low Stock"
          value={stats.low_stock}
          description="Items requiring attention"
          icon={AlertTriangle}
        />


      </div>





      {/* Monthly Activity */}

      <div className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-6
      ">


        <KPICard
          title="Receipts"
          value={stats.monthly_activity.receipts}
          description="Received this month"
          icon={Truck}
        />


        <KPICard
          title="Transfers"
          value={stats.monthly_activity.transfers}
          description="Inventory movements"
          icon={ArrowRightLeft}
        />


        <KPICard
          title="Adjustments"
          value={stats.monthly_activity.adjustments}
          description="Stock corrections"
          icon={Settings}
        />


      </div>





      {/* Warehouse Overview */}

      <WarehouseStatus />





      {/* Inventory Status */}

      <div className="
        rounded-xl
        border
        bg-white
        p-6
        shadow-sm
      ">


        <h2 className="text-lg font-semibold mb-4">
          Inventory Status
        </h2>



        <div className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-4
        ">


          {stats.inventoryStatus.map((item)=>(

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

              <StatusBadge
                status={item.label}
              />


              <span className="text-xl font-bold">
                {item.count}
              </span>


            </div>

          ))}


        </div>


      </div>





      {/* Top Moving Products */}

      <div className="
        rounded-xl
        border
        bg-white
        p-6
        shadow-sm
        overflow-x-auto
      ">


        <h2 className="text-lg font-semibold mb-4">
          Top Moving Products
        </h2>



        <table className="w-full min-w-[500px]">


          <thead>

            <tr className="border-b text-left">


              <th className="p-3">
                Product
              </th>


              <th className="p-3">
                Movement
              </th>


            </tr>


          </thead>



          <tbody>


            {stats.top_movers.map((item)=>(


              <tr
                key={item.product}
                className="border-b"
              >


                <td className="p-3">
                  {item.product}
                </td>


                <td className="p-3 font-semibold">
                  {item.movement}
                </td>


              </tr>


            ))}


          </tbody>


        </table>


      </div>





      {/* Inventory */}

      <div className="w-full min-w-0">

        <InventoryTable />

      </div>





      {/* Recent Transactions */}

      <div className="w-full min-w-0">

        <TransactionList />

      </div>



    </div>

  )

}


export default Dashboard