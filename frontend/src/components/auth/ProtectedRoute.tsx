import { Navigate } from "react-router-dom"

import { getUserRole } from "../../api/auth"



interface ProtectedRouteProps {

    children: React.ReactNode

    allowedRoles?: string[]

}



function ProtectedRoute({
    children,
    allowedRoles = []
}: ProtectedRouteProps) {


    const token =
        localStorage.getItem("token")



    const role =
        getUserRole()



    if (!token) {

        return (

            <Navigate
                to="/login"
                replace
            />

        )

    }



    if (
        allowedRoles.length > 0 &&
        !allowedRoles.includes(role || "")
    ) {

        return (

            <Navigate
                to="/"
                replace
            />

        )

    }



    return children

}


export default ProtectedRoute