import {
    getCurrentUser,
    logout
} from "../../api/auth"

import { useNavigate } from "react-router-dom"



function Header() {


    const navigate = useNavigate()


    const user = getCurrentUser()



    const initials = user?.username
        ? user.username
            .split(" ")
            .map((name: string) => name[0])
            .join("")
            .substring(0, 2)
            .toUpperCase()
        : "U"



    function handleLogout(){

        logout()

        navigate("/login")

    }



    return (

        <header className="h-16 border-b flex items-center justify-between px-6 bg-white">


            <h2 className="text-xl font-semibold">
                Operations Dashboard
            </h2>



            <div className="flex items-center gap-4">


                <div className="text-right">

                    <div className="text-sm text-gray-700 font-medium">
                        {user?.username || "User"}
                    </div>


                    <div className="text-xs text-gray-500">
                        {user?.role || "Employee"}
                    </div>

                </div>



                <button
                    onClick={handleLogout}
                    className="text-sm text-red-500 hover:text-red-700"
                >
                    Logout
                </button>



                <div className="h-9 w-9 rounded-full bg-slate-200 flex items-center justify-center font-semibold">

                    {initials}

                </div>


            </div>


        </header>

    )

}


export default Header