import Sidebar from "./Sidebar"
import Header from "./Header"



function MainLayout({
  children
}: {
  children: React.ReactNode
}) {


  return (

    <div
      className="
        flex
        h-screen
        overflow-hidden
        bg-slate-50
      "
    >



      <Sidebar />




      <main
        className="
          flex-1
          min-w-0
          flex
          flex-col
        "
      >



        <Header />




        <section
          className="
            flex-1
            overflow-y-auto
            p-6
            lg:p-8
          "
        >

          {children}

        </section>




      </main>



    </div>

  )

}


export default MainLayout