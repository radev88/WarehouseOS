import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend
} from "recharts"

import { useEffect, useState } from "react"

import {
  getInventoryStatus
} from "../../api/reports"

import Card from "../common/Card"


interface InventoryStatus {

  name: string
  value: number

}



const COLORS = [
  "#16a34a",
  "#2563eb",
  "#9333ea",
  "#ca8a04"
]



function InventoryStatusChart() {


  const [
    inventoryStatusData,
    setInventoryStatusData
  ] = useState<InventoryStatus[]>([])



  useEffect(()=>{


    async function loadData(){

      try{

        const data =
          await getInventoryStatus()


        setInventoryStatusData(data)

      }

      catch(error){

        console.error(
          "Inventory status report error:",
          error
        )

      }

    }


    loadData()


  },[])




  return (

    <Card title="Inventory Status">


      <div className="h-80">


        <ResponsiveContainer
          width="100%"
          height="100%"
        >


          <PieChart>


            <Pie

              data={inventoryStatusData}

              dataKey="value"

              nameKey="name"

              outerRadius={110}

              label

            >


              {inventoryStatusData.map((_, index)=>(


                <Cell

                  key={index}

                  fill={
                    COLORS[
                      index % COLORS.length
                    ]
                  }

                />


              ))}


            </Pie>



            <Tooltip />


            <Legend />


          </PieChart>


        </ResponsiveContainer>


      </div>


    </Card>

  )

}


export default InventoryStatusChart