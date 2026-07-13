import { useEffect, useState } from "react"


interface WarehouseStatus {
  warehouse: string
  items: number
  capacity: number
  utilization: number
}


function WarehouseStatus() {


  const [warehouses, setWarehouses] = useState<WarehouseStatus[]>([])


  useEffect(() => {

    fetch("http://127.0.0.1:8000/warehouses/status")
      .then((response) => response.json())
      .then((data) => {
        setWarehouses(data)
      })
      .catch((error) => {
        console.error(
          "Warehouse status error:",
          error
        )
      })

  }, [])



  return (

    <div className="rounded-xl border bg-white p-6 shadow-sm">


      <h2 className="text-lg font-semibold mb-4">
        Warehouse Overview
      </h2>


      <div className="space-y-4">


        {warehouses.map((warehouse) => (

          <div
            key={warehouse.warehouse}
            className="border rounded-lg p-4"
          >


            <div className="flex justify-between mb-2">


              <span className="font-medium">
                {warehouse.warehouse}
              </span>


              <span className="text-sm text-gray-500">
                {warehouse.utilization}%
              </span>


            </div>



            <div className="w-full bg-gray-200 rounded-full h-3">


              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{
                  width: `${warehouse.utilization}%`
                }}
              />


            </div>



            <p className="text-sm text-gray-500 mt-2">

              {warehouse.items} / {warehouse.capacity} units

            </p>


          </div>

        ))}


      </div>


    </div>

  )

}


export default WarehouseStatus