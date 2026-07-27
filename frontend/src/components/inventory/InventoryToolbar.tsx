import {
  Search,
  Filter
} from "lucide-react"



function InventoryToolbar(){

  return (

    <div
      className="
        flex
        flex-col
        lg:flex-row
        lg:items-center
        lg:justify-between
        gap-4
        mb-6
        rounded-xl
        border
        bg-white
        p-5
        shadow-sm
      "
    >


      <div
        className="
          flex
          items-center
          gap-3
          w-full
          lg:w-auto
        "
      >

        <div
          className="
            relative
            w-full
            lg:w-96
          "
        >

          <Search

            size={18}

            className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-slate-400
            "

          />


          <input

            type="text"

            placeholder="Search inventory..."

            className="
              w-full
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              py-2.5
              pl-10
              pr-4
              text-sm
              outline-none
              transition
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500/20
            "

          />


        </div>


      </div>




      <div
        className="
          flex
          items-center
          gap-2
        "
      >

        <Filter

          size={18}

          className="
            text-slate-400
          "

        />


        <select

          className="
            rounded-xl
            border
            border-slate-200
            bg-slate-50
            px-4
            py-2.5
            text-sm
            text-slate-700
            outline-none
            cursor-pointer
            transition
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/20
          "

        >

          <option>
            All Warehouses
          </option>


          <option>
            Orlando Distribution Center
          </option>


          <option>
            Miami Storage Facility
          </option>


        </select>


      </div>


    </div>

  )

}


export default InventoryToolbar