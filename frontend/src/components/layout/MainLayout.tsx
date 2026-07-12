import Sidebar from "./Sidebar"
import Header from "./Header"

function MainLayout({children}: {children: React.ReactNode}) {

  return (

    <div className="flex">

      <Sidebar />

      <main className="flex-1">

        <Header />

        <section className="p-6">
          {children}
        </section>

      </main>

    </div>

  )
}

export default MainLayout