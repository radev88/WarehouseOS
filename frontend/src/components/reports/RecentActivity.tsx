import { useEffect, useState } from "react"

import Card from "../common/Card"

import {
    getRecentActivity
} from "../../api/reports"

import type {
    RecentActivity as Activity
} from "../../api/reports"



function RecentActivity(){


    const [
        activities,
        setActivities
    ] = useState<Activity[]>([])



    useEffect(()=>{


        async function loadActivity(){

            try{

                const data =
                    await getRecentActivity()


                setActivities(data)

            }

            catch(error){

                console.error(
                    "Recent activity error:",
                    error
                )

            }

        }


        loadActivity()


    },[])





    return (

        <Card title="Recent Warehouse Activity">


            <div className="space-y-4">


            {
                activities.map((activity,index)=>(


                    <div

                        key={index}

                        className="
                        border-b
                        pb-3
                        last:border-none
                        "

                    >


                        <p className="font-medium">

                            {activity.activity}

                        </p>



                        <p className="text-sm text-gray-500">

                            {activity.time}

                        </p>



                    </div>


                ))
            }



            </div>


        </Card>

    )

}



export default RecentActivity