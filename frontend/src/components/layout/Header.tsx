import { useState } from "react"

import {
  Bell,
  LogOut,
  Search
} from "lucide-react"

import {
  getCurrentUser,
  logout
} from "../../api/auth"

import {
  useNavigate
} from "react-router-dom"



function Header() {

  const [search, setSearch] = useState("")
  const navigate = useNavigate()


  const user = getCurrentUser()



  const initials = user?.username

    ? user.username
        .split(" ")
        .map((name: string) => name[0])
        .join("")
        .substring(0,2)
        .toUpperCase()

    : "U"




  function handleLogout(){

    logout()

    navigate("/login")

  }




  return (

    <header
      className="
        h-20
        bg-white
        border-b
        border-slate-200
        flex
        items-center
        justify-between
        px-8
      "
    >



      <div
        className="
          flex
          flex-col
        "
      >


        <h2
          className="
            text-xl
            font-semibold
            text-slate-800
          "
        >
          Operations Dashboard
        </h2>


        <p
          className="
            text-sm
            text-slate-500
          "
        >
          Monitor inventory, receiving, and warehouse activity
        </p>


      </div>





      <div
        className="
          flex
          items-center
          gap-5
        "
      >



        <div
          className="
            hidden
            lg:flex
            items-center
            gap-2
            bg-slate-100
            rounded-xl
            px-4
            py-2.5
            w-64
          "
        >


          <Search
            size={18}
            className="text-slate-400"
          />


          <input

  type="text"

  value={search}

  onChange={
    (e)=>
    setSearch(
      e.target.value
    )
  }

  onKeyDown={
    (e)=>{

      if(
        e.key === "Enter"
        &&
        search.trim()
      ){

        console.log(
          "Searching:",
          search
        )

      }

    }
  }

  placeholder="Search inventory, orders..."

  className="
    bg-transparent
    outline-none
    text-sm
    w-full
    placeholder:text-slate-400
  "

/>


        </div>





        <button

          className="
            relative
            h-10
            w-10
            rounded-xl
            flex
            items-center
            justify-center
            hover:bg-slate-100
            transition
          "

        >

          <Bell
            size={20}
            className="text-slate-600"
          />


          <span
            className="
              absolute
              top-2
              right-2
              h-2
              w-2
              rounded-full
              bg-blue-600
            "
          />


        </button>





        <div
          className="
            h-8
            w-px
            bg-slate-200
          "
        />





        <div
          className="
            flex
            items-center
            gap-3
          "
        >



          <div
            className="
              hidden
              md:block
              text-right
            "
          >

            <p
              className="
                text-sm
                font-medium
                text-slate-700
              "
            >
              {user?.username || "User"}
            </p>


            <p
              className="
                text-xs
                text-slate-500
              "
            >
              {user?.role || "Employee"}
            </p>


          </div>





          <div
            className="
              h-10
              w-10
              rounded-full
              bg-blue-600
              text-white
              flex
              items-center
              justify-center
              font-semibold
              text-sm
            "
          >

            {initials}

          </div>





          <button

            onClick={handleLogout}

            title="Logout"

            className="
              h-10
              w-10
              rounded-xl
              flex
              items-center
              justify-center
              text-slate-500
              hover:text-red-600
              hover:bg-red-50
              transition
            "

          >

            <LogOut size={19}/>

          </button>


        </div>


      </div>


    </header>

  )

}


export default Header