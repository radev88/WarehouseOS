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

    <div className="rounded-xl border bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <p className="text-sm text-gray-500">
          {title}
        </p>

        <Icon 
          size={22}
          className="text-slate-500"
        />

      </div>


      <h2 className="mt-4 text-3xl font-bold">
        {value}
      </h2>


      <p className="mt-2 text-sm text-gray-500">
        {description}
      </p>


    </div>

  )

}


export default KPICard