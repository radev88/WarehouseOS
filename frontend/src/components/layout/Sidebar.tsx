import {
  LayoutDashboard,
  Package,
  Boxes,
  Truck,
  ClipboardList,
  ArrowRightLeft,
  ClipboardCheck,
  BarChart3,
  ShoppingCart,
  Settings
} from "lucide-react"

import { NavLink } from "react-router-dom"


function Sidebar() {

  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard
    },
    {
      name: "Inventory",
      path: "/inventory",
      icon: Boxes
    },
    {
    name: "Transfers",
    path: "/transfers",
    icon: ArrowRightLeft
    },
    {
    name: "Adjustments",
    path: "/adjustments",
    icon: ClipboardCheck
    },
    {
      name: "Products",
      path: "/products",
      icon: Package
    },
    {
      name: "Receiving",
      path: "/receiving",
      icon: Truck
    },
    {
      name: "Purchase Orders",
      path: "/purchase-orders",
      icon: ClipboardList
    },
    {
    name: "Sales Orders",
    path: "/sales-orders",
    icon: ShoppingCart
    },
    {
      name: "Reports",
      path: "/reports",
      icon: BarChart3
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings
    }
  ]


  return (

    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">

      <h1 className="text-2xl font-bold mb-10">
        WarehouseOS
      </h1>


      <nav className="space-y-2">

        {menuItems.map((item) => {

          const Icon = item.icon

          return (

            <NavLink
              key={item.name}
              to={item.path}
              className={({isActive}) =>
                `
                flex
                items-center
                gap-3
                rounded-lg
                px-4
                py-3
                cursor-pointer
                ${
                  isActive
                  ? "bg-slate-800 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }
                `
              }
            >

              <Icon size={20}/>

              <span>
                {item.name}
              </span>

            </NavLink>

          )

        })}

      </nav>

    </aside>

  )

}


export default Sidebar