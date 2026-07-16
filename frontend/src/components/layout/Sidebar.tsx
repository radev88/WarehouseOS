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
  Settings,
  Users
} from "lucide-react"

import { NavLink } from "react-router-dom"

import { getUserRole } from "../../api/auth"



function Sidebar() {


  const role = getUserRole()



  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
      roles: [
        "Admin",
        "Manager",
        "Warehouse User",
        "Viewer"
      ]
    },
    {
      name: "Inventory",
      path: "/inventory",
      icon: Boxes,
      roles: [
        "Admin",
        "Manager",
        "Warehouse User",
        "Viewer"
      ]
    },
    {
      name: "Transfers",
      path: "/transfers",
      icon: ArrowRightLeft,
      roles: [
        "Admin",
        "Manager",
        "Warehouse User"
      ]
    },
    {
      name: "Adjustments",
      path: "/adjustments",
      icon: ClipboardCheck,
      roles: [
        "Admin",
        "Manager"
      ]
    },
    {
      name: "Products",
      path: "/products",
      icon: Package,
      roles: [
        "Admin",
        "Manager",
        "Warehouse User",
        "Viewer"
      ]
    },
    {
      name: "Receiving",
      path: "/receiving",
      icon: Truck,
      roles: [
        "Admin",
        "Manager",
        "Warehouse User"
      ]
    },
    {
      name: "Purchase Orders",
      path: "/purchase-orders",
      icon: ClipboardList,
      roles: [
        "Admin",
        "Manager"
      ]
    },
    {
      name: "Sales Orders",
      path: "/sales-orders",
      icon: ShoppingCart,
      roles: [
        "Admin",
        "Manager",
        "Warehouse User"
      ]
    },
    {
      name: "Reports",
      path: "/reports",
      icon: BarChart3,
      roles: [
        "Admin",
        "Manager",
        "Warehouse User",
        "Viewer"
      ]
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
      roles: [
        "Admin"
      ]
    },
    {
      name: "Users",
      path: "/users",
      icon: Users,
      roles: [
        "Admin"
      ]
    }
  ]



  const visibleItems = menuItems.filter(
    (item) =>
      role &&
      item.roles.includes(role)
  )



  return (

    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">


      <h1 className="text-2xl font-bold mb-10">
        WarehouseOS
      </h1>



      <nav className="space-y-2">


        {visibleItems.map((item) => {


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