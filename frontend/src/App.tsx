import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom"


import MainLayout from "./components/layout/MainLayout"

import ProtectedRoute from "./components/auth/ProtectedRoute"


import Dashboard from "./pages/Dashboard"
import Products from "./pages/Products"
import Inventory from "./pages/Inventory"
import Receiving from "./pages/Receiving"
import PurchaseOrders from "./pages/PurchaseOrders"
import Reports from "./pages/Reports"
import Transfers from "./pages/Transfers"
import Adjustments from "./pages/Adjustments"
import SalesOrders from "./pages/SalesOrders"
import SalesOrderDetails from "./pages/SalesOrderDetails"
import Login from "./pages/Login"
import Users from "./pages/Users"


import { isAuthenticated } from "./api/auth"



function ProtectedRoutes(){


    if(!isAuthenticated()){

        return (

            <Navigate
                to="/login"
                replace
            />

        )

    }



    return (

        <MainLayout>

            <Routes>


                <Route
                    path="/"
                    element={
                        <Dashboard />
                    }
                />



                <Route
                    path="/products"
                    element={
                        <Products />
                    }
                />



                <Route
                    path="/inventory"
                    element={
                        <Inventory />
                    }
                />



                <Route
                    path="/receiving"
                    element={
                        <Receiving />
                    }
                />



                <Route
                    path="/purchase-orders"
                    element={
                        <PurchaseOrders />
                    }
                />



                <Route
                    path="/sales-orders/:id"
                    element={
                        <SalesOrderDetails />
                    }
                />



                <Route
                    path="/sales-orders"
                    element={
                        <SalesOrders />
                    }
                />



                <Route
                    path="/transfers"
                    element={
                        <Transfers />
                    }
                />



                <Route
                    path="/adjustments"
                    element={
                        <Adjustments />
                    }
                />



                <Route
                    path="/users"
                    element={
                        <ProtectedRoute
                            allowedRoles={[
                                "Admin"
                            ]}
                        >

                            <Users />

                        </ProtectedRoute>
                    }
                />



                <Route
                    path="/reports"
                    element={
                        <Reports />
                    }
                />



                <Route
                    path="*"
                    element={
                        <Navigate
                            to="/"
                            replace
                        />
                    }
                />


            </Routes>


        </MainLayout>

    )

}





function App(){


    return (

        <BrowserRouter>


            <Routes>


                <Route
                    path="/login"
                    element={
                        <Login />
                    }
                />



                <Route
                    path="/*"
                    element={
                        <ProtectedRoutes />
                    }
                />


            </Routes>


        </BrowserRouter>

    )

}


export default App