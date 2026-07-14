import Sidebar from "./Sidebar"
import Header from "./Header"


function MainLayout({
  children
}: {
  children: React.ReactNode
}) {


  return (

    <div className="flex min-h-screen">


      <Sidebar />


      <main className="flex-1 min-w-0">


        <Header />


        <section className="p-6">

          {children}

        </section>


      </main>


    </div>

  )

}


export default MainLayout