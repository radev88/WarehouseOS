import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import MainLayout from "./components/layout/MainLayout"

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


function App() {

  return (

    <BrowserRouter>

      <MainLayout>

        <Routes>

          <Route 
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/products"
            element={<Products />}
          />

          <Route
            path="/inventory"
            element={<Inventory />}
          />

          <Route
            path="/receiving"
            element={<Receiving />}
          />

          <Route
            path="/purchase-orders"
            element={<PurchaseOrders />}
          />
          
          <Route
            path="/sales-orders/:id"
            element={<SalesOrderDetails />}
          />

          <Route
            path="/sales-orders"
            element={<SalesOrders />}
          />
          
          <Route
            path="/transfers"
            element={<Transfers />}
          />
          <Route
            path="/adjustments"
            element={<Adjustments />}
          />
          <Route
            path="/reports"
            element={<Reports />}
          />

        </Routes>

      </MainLayout>

    </BrowserRouter>

  )

}

export default App