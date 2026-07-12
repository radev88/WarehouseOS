function Header() {

  return (

    <header className="h-16 border-b flex items-center justify-between px-6 bg-white">

      <h2 className="text-xl font-semibold">
        Operations Dashboard
      </h2>


      <div className="flex items-center gap-4">

        <div className="text-sm text-gray-500">
          Orlando Distribution Center
        </div>


        <div className="h-9 w-9 rounded-full bg-slate-200 flex items-center justify-center font-semibold">
          RD
        </div>

      </div>


    </header>

  )

}

export default Header