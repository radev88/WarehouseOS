import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

import { useEffect, useState } from "react"

import {
  getSupplierActivity
} from "../../api/reports"

import Card from "../common/Card"



interface SupplierActivity {

  supplier: string
  orders: number

}




function SupplierActivityChart() {


  const [
    supplierActivity,
    setSupplierActivity
  ] = useState<SupplierActivity[]>([])




  useEffect(()=>{


    async function loadSupplierActivity(){


      try{


        const data =
          await getSupplierActivity()


        setSupplierActivity(data)


      }


      catch(error){


        console.error(
          "Supplier activity report error:",
          error
        )


      }


    }



    loadSupplierActivity()



  },[])






  return (

    <Card title="Top Suppliers by Open Purchase Orders">


      <div className="h-80">


        <ResponsiveContainer
          width="100%"
          height="100%"
        >


          <BarChart
            data={supplierActivity}
          >


            <XAxis
              dataKey="supplier"
            />


            <YAxis />


            <Tooltip />



            <Bar

              dataKey="orders"

              fill="#2563eb"

              radius={[
                6,
                6,
                0,
                0
              ]}

            />


          </BarChart>


        </ResponsiveContainer>


      </div>


    </Card>

  )

}



export default SupplierActivityChart