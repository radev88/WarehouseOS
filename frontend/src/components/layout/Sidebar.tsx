import {
  LayoutDashboard,
  Package,
  Boxes,
  Truck,
  BarChart3,
  Settings
} from "lucide-react"


function Sidebar() {

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard
    },
    {
      name: "Inventory",
      icon: Boxes
    },
    {
      name: "Products",
      icon: Package
    },
    {
      name: "Receiving",
      icon: Truck
    },
    {
      name: "Reports",
      icon: BarChart3
    },
    {
      name: "Settings",
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

            <div
              key={item.name}
              className="
                flex
                items-center
                gap-3
                rounded-lg
                px-4
                py-3
                text-slate-300
                hover:bg-slate-800
                hover:text-white
                cursor-pointer
              "
            >

              <Icon size={20}/>

              <span>
                {item.name}
              </span>


            </div>

          )

        })}

      </nav>


    </aside>

  )

}


export default Sidebar