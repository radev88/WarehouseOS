function WarehouseStatus(){

  return (

    <div className="rounded-xl bg-slate-900 text-white p-6">

      <h2 className="text-lg font-semibold">
        Orlando Distribution Center
      </h2>


      <div className="mt-4 grid grid-cols-3 gap-4">


        <div>
          <p className="text-slate-400 text-sm">
            Capacity
          </p>

          <p className="text-2xl font-bold">
            78%
          </p>
        </div>


        <div>
          <p className="text-slate-400 text-sm">
            Active Workers
          </p>

          <p className="text-2xl font-bold">
            14
          </p>
        </div>


        <div>
          <p className="text-slate-400 text-sm">
            Orders Today
          </p>

          <p className="text-2xl font-bold">
            86
          </p>
        </div>


      </div>


    </div>

  )

}

export default WarehouseStatus