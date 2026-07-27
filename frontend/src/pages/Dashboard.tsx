import { useEffect, useState } from "react"

import KPICard from "../components/dashboard/KPICard"
import InventoryTable from "../components/dashboard/InventoryTable"
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
  total_products: number
  inventory_value: number
  low_stock: number
  out_of_stock: number
  warehouses: number

  orders: {
    open_purchase_orders: number
    pending_receiving: number
    open_sales_orders: number
    ready_to_ship: number
  }

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

    recent_transactions: {
    id: number
    product: string
    type: string
    quantity: number
    created_at: string
  }[]
}

function Dashboard(){

  const [
    stats,
    setStats
  ] = useState<DashboardStats | null>(null)

  useEffect(()=>{

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
        xl:grid-cols-5
        gap-6
      ">

        <KPICard

          title="Products"

          value={
            stats.total_products.toLocaleString()
          }

          description="Active SKUs"

          icon={Package}

        />
        <KPICard

          title="Inventory Units"

          value={
            stats.total_units.toLocaleString()
          }

          description="Units currently stored"

          icon={ClipboardList}

        />

        <KPICard

          title="Inventory Value"

          value={
            `$${stats.inventory_value.toLocaleString()}`
          }

          description="Current stock value"

          icon={DollarSign}

        />
        <KPICard

          title="Low Stock"

          value={
            stats.low_stock.toLocaleString()
          }

          description="Items requiring attention"

          icon={AlertTriangle}

        />

        <KPICard

          title="Open POs"

          value={
            stats.orders.open_purchase_orders.toLocaleString()
          }

          description="Awaiting receiving"

          icon={ClipboardList}

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

          value={
            stats.monthly_activity.receipts.toLocaleString()
          }

          description="Received this month"

          icon={Truck}

        />
        <KPICard

          title="Transfers"

          value={
            stats.monthly_activity.transfers.toLocaleString()
          }

          description="Inventory movements"

          icon={ArrowRightLeft}

        />
        <KPICard

          title="Adjustments"

          value={
            stats.monthly_activity.adjustments.toLocaleString()
          }

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


        <div className="
          flex
          items-center
          justify-between
          mb-6
        ">


          <h2 className="text-lg font-semibold">

            Inventory Status

          </h2>


          <span className="text-sm text-gray-500">

            Stock health overview

          </span>


        </div>




        <div className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-5
        ">


          {
            stats.inventoryStatus.map((item)=>(


              <div

                key={item.label}

                className="
                  rounded-xl
                  border
                  p-5
                  hover:shadow-md
                  transition
                "

              >


                <StatusBadge

                  status={item.label}

                />



                <div className="mt-5">


                  <h3 className="
                    text-3xl
                    font-bold
                    text-slate-800
                  ">

                    {item.count.toLocaleString()}

                  </h3>



                  <p className="
                    mt-1
                    text-sm
                    text-gray-500
                  ">


                    {
                      item.label === "Available"
                        ? "Healthy stock availability"
                        : item.label === "Low Stock"
                        ? "Items requiring attention"
                        : "Items unavailable"

                    }


                  </p>


                </div>


              </div>


            ))
          }


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


        <div className="
          flex
          items-center
          justify-between
          mb-6
        ">


          <h2 className="text-lg font-semibold">

            Top Moving Products

          </h2>


          <span className="text-sm text-gray-500">

            Highest inventory activity

          </span>


        </div>




        <table className="w-full min-w-[600px]">


          <thead>

            <tr className="
              border-b
              text-left
              text-sm
              text-gray-500
            ">


              <th className="p-3">

                #

              </th>


              <th className="p-3">

                Product

              </th>


              <th className="p-3 text-right">

                Movement

              </th>


            </tr>


          </thead>





          <tbody>


            {
              stats.top_movers.slice(0,5).map((item, index)=>(


                <tr

                  key={item.product}

                  className="
                    border-b
                    hover:bg-slate-50
                    transition
                  "

                >


                  <td className="
                    p-3
                    font-semibold
                    text-gray-500
                  ">

                    {index + 1}

                  </td>




                  <td className="
                    p-3
                    font-medium
                  ">

                    {item.product}

                  </td>




                  <td className="
                    p-3
                    text-right
                    font-bold
                    text-slate-800
                  ">

                    {item.movement.toLocaleString()}

                  </td>



                </tr>


              ))
            }



          </tbody>


        </table>


      </div>

      {/* Inventory */}

      <div className="w-full min-w-0">

        <InventoryTable />
      </div>
            {/* Recent Transactions */}

      <div className="
        rounded-xl
        border
        bg-white
        p-6
        shadow-sm
        overflow-x-auto
      ">


        <div className="
          flex
          items-center
          justify-between
          mb-6
        ">


          <h2 className="text-lg font-semibold">

            Recent Transactions

          </h2>


          <span className="text-sm text-gray-500">

            Latest warehouse activity

          </span>


        </div>





        <table className="w-full min-w-[700px]">


          <thead>

            <tr className="
              border-b
              text-left
              text-sm
              text-gray-500
            ">


              <th className="p-3">

                Product

              </th>


              <th className="p-3">

                Type

              </th>


              <th className="p-3 text-right">

                Quantity

              </th>


              <th className="p-3 text-right">

                Date

              </th>


            </tr>


          </thead>





          <tbody>


            {
              stats.recent_transactions?.slice(0,5).map((transaction)=>(


                <tr

                  key={transaction.id}

                  className="
                    border-b
                    hover:bg-slate-50
                    transition
                  "

                >



                  <td className="
                    p-3
                    font-medium
                  ">


                    {transaction.product}


                  </td>





                  <td className="p-3">


                    <StatusBadge

                      status={
                        transaction.type
                      }

                    />


                  </td>





                  <td className="
                    p-3
                    text-right
                    font-semibold
                  ">


                    {
                      transaction.quantity > 0
                        ? `+${transaction.quantity.toLocaleString()}`
                        : transaction.quantity.toLocaleString()
                    }


                  </td>





                  <td className="
                    p-3
                    text-right
                    text-sm
                    text-gray-500
                  ">


                    {
                      new Date(
                        transaction.created_at
                      ).toLocaleString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                          hour: "numeric",
                          minute: "2-digit"
                        }
                      )
                    }


                  </td>



                </tr>


              ))
            }



          </tbody>


        </table>


      </div>
    </div>

  )

}
export default Dashboard