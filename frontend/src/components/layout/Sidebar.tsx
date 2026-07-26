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

import { getCurrentUser, getUserRole } from "../../api/auth"



function Sidebar() {


  const role = getUserRole()

  const user = getCurrentUser()



  const menuSections = [

    {
      title: "OPERATIONS",

      items: [

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
        }

      ]

    },


    {
      title: "ORDERS",

      items: [

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
        }

      ]

    },


    {
      title: "CATALOG",

      items: [

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
        }

      ]

    },


    {
      title: "ANALYTICS",

      items: [

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
        }

      ]

    },


    {
      title: "ADMINISTRATION",

      items: [

        {
          name: "Users",
          path: "/users",
          icon: Users,
          roles: [
            "Admin"
          ]
        },


        {
          name: "Settings",
          path: "/settings",
          icon: Settings,
          roles: [
            "Admin"
          ]
        }

      ]

    }

  ]



  const initials = user?.username

    ? user.username
      .split(" ")
      .map((name: string) => name[0])
      .join("")
      .substring(0,2)
      .toUpperCase()

    : "U"




  return (

    <aside
      className="
        w-72
        min-h-screen
        bg-slate-950
        text-white
        flex
        flex-col
        px-5
        py-6
      "
    >


      <div className="mb-10">


        <h1
          className="
            text-2xl
            font-bold
            tracking-tight
          "
        >
          WarehouseOS
        </h1>


        <p
          className="
            text-xs
            text-slate-400
            mt-1
          "
        >
          Warehouse Intelligence Platform
        </p>


      </div>




      <nav
        className="
          flex-1
          space-y-8
        "
      >


        {
          menuSections.map((section)=>(


            <div key={section.title}>


              <p
                className="
                  text-xs
                  font-semibold
                  tracking-widest
                  text-slate-500
                  mb-3
                  px-3
                "
              >
                {section.title}
              </p>



              <div
                className="
                  space-y-1
                "
              >


                {
                  section.items

                  .filter(
                    item =>
                      role &&
                      item.roles.includes(role)
                  )

                  .map((item)=>(


                    <NavLink

                      key={item.name}

                      to={item.path}

                      className={({isActive}) =>

                        `
                        flex
                        items-center
                        gap-3
                        px-3
                        py-2.5
                        rounded-xl
                        transition-all
                        duration-200

                        ${
                          isActive

                          ? 
                          "bg-blue-600 text-white shadow-lg shadow-blue-600/20"

                          :

                          "text-slate-300 hover:bg-slate-800 hover:text-white"
                        }

                        `
                      }

                    >


                      <item.icon size={19}/>


                      <span
                        className="
                          text-sm
                          font-medium
                        "
                      >
                        {item.name}
                      </span>


                    </NavLink>


                  ))

                }


              </div>


            </div>


          ))

        }


      </nav>




      <div
        className="
          border-t
          border-slate-800
          pt-5
          mt-6
        "
      >


        <div
          className="
            flex
            items-center
            gap-3
          "
        >


          <div
            className="
              h-10
              w-10
              rounded-full
              bg-slate-800
              flex
              items-center
              justify-center
              font-semibold
              text-sm
            "
          >
            {initials}
          </div>


          <div>


            <p
              className="
                text-sm
                font-medium
              "
            >
              {user?.username || "User"}
            </p>


            <p
              className="
                text-xs
                text-slate-400
              "
            >
              {user?.role || "Employee"}
            </p>


          </div>


        </div>



        <p
          className="
            text-xs
            text-slate-600
            mt-5
          "
        >
          WarehouseOS v1.0
        </p>


      </div>


    </aside>

  )

}


export default Sidebar