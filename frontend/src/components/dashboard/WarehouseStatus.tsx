import { useEffect, useState } from "react"


interface WarehouseStatus {
  warehouse: string
  items: number
  capacity: number
  utilization: number
  status: string
}


function WarehouseStatus() {


  const [warehouses, setWarehouses] = useState<WarehouseStatus[]>([])

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState("")



  useEffect(() => {


    fetch("http://127.0.0.1:8000/warehouses/status")

      .then((response) => {

        if (!response.ok) {
          throw new Error("Failed to load warehouse data")
        }

        return response.json()

      })

      .then((data) => {

        setWarehouses(data)

      })

      .catch((error) => {

        console.error(
          "Warehouse status error:",
          error
        )

        setError(
          "Unable to load warehouse information"
        )

      })

      .finally(() => {

        setLoading(false)

      })


  }, [])



  if (loading) {

    return (

      <div className="rounded-xl border bg-white p-6 shadow-sm">

        Loading warehouse data...

      </div>

    )

  }



  if (error) {

    return (

      <div className="rounded-xl border bg-white p-6 shadow-sm text-red-500">

        {error}

      </div>

    )

  }



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
                className="bg-blue-600 h-3 rounded-full transition-all"
                style={{
                  width: `${Math.min(warehouse.utilization, 100)}%`
                }}
              />


            </div>



            <p className="text-sm text-gray-500 mt-2">

              {warehouse.items.toLocaleString()} / {warehouse.capacity.toLocaleString()} units

            </p>
            <p className="text-sm font-medium mt-1">
              {warehouse.status}
            </p>


          </div>

        ))}


      </div>


    </div>

  )

}


export default WarehouseStatus