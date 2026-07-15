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
  getInventoryCategories
} from "../../api/reports"

import Card from "../common/Card"



interface InventoryCategory {

  name: string
  value: number

}



const COLORS = [
  "#2563eb",
  "#10b981",
  "#f59e0b",
  "#8b5cf6"
]



function InventoryCategoryChart() {


  const [
    inventoryCategoryData,
    setInventoryCategoryData
  ] = useState<InventoryCategory[]>([])




  useEffect(()=>{


    async function loadCategories(){


      try{


        const data =
          await getInventoryCategories()


        setInventoryCategoryData(data)


      }


      catch(error){


        console.error(
          "Inventory category report error:",
          error
        )


      }


    }


    loadCategories()


  },[])






  return (

    <Card title="Inventory by Category">


      <div className="h-80">


        <ResponsiveContainer
          width="100%"
          height="100%"
        >


          <PieChart>


            <Pie

              data={inventoryCategoryData}

              dataKey="value"

              nameKey="name"

              outerRadius={110}

              label

            >



              {
                inventoryCategoryData.map((_, index)=>(


                  <Cell

                    key={index}

                    fill={
                      COLORS[
                        index % COLORS.length
                      ]
                    }

                  />


                ))
              }



            </Pie>



            <Tooltip />

            <Legend />


          </PieChart>


        </ResponsiveContainer>


      </div>


    </Card>

  )

}



export default InventoryCategoryChart