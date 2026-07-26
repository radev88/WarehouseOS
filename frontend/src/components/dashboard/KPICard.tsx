import type { LucideIcon } from "lucide-react"



type KPICardProps = {

  title: string

  value: string | number

  description: string

  icon: LucideIcon

}



function KPICard({

  title,

  value,

  description,

  icon: Icon

}: KPICardProps) {



  return (

    <div

      className="
        group
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition
        duration-200
        hover:-translate-y-1
        hover:shadow-md
      "

    >



      <div

        className="
          flex
          items-start
          justify-between
        "

      >



        <div>


          <p

            className="
              text-sm
              font-medium
              text-slate-500
            "

          >

            {title}

          </p>



          <h2

            className="
              mt-3
              text-3xl
              font-bold
              tracking-tight
              text-slate-900
            "

          >

            {value}

          </h2>


        </div>





        <div

          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-slate-100
            text-slate-600
            transition
            group-hover:bg-blue-100
            group-hover:text-blue-600
          "

        >

          <Icon size={22}/>


        </div>




      </div>





      <div

        className="
          mt-5
          flex
          items-center
          justify-between
        "

      >

        <p

          className="
            text-sm
            text-slate-500
          "

        >

          {description}

        </p>


      </div>




    </div>

  )

}


export default KPICard