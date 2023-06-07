import { Outlet, Route, Routes } from "react-router-dom"
import { LocationsList } from "../Locations/LocationsList"
import { ProductList } from "../Products/ProductsList"
import { ProductForm } from "../Products/ProductForm"
import { ProductSearch } from "../Products/ProductSearch"
import { EmployeeForm } from "../Employees/EmployeeForm"
import { EmployeeList } from "../Employees/EmployeeList"
import { EmployeeDetails } from "../Employees/EmployeeDetails"
import { CustomerList } from "../Customers/CustomerList"
import { CustomerDetails } from "../Customers/CustomerDetails"

export const EmployeeViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Kandy Korner</h1>

                    <Outlet />
                </>
            }>

                <Route path="locations" element={ <LocationsList /> } />
                {/* This route path is what invokes the function and returns
                the changed state of location. The route path links up with the 
               locations link in the navbar.js, while the element links up 
               with the invoked function on the LocationsList button */}
               <Route path="products" element={<ProductList /> } />
               <Route path="product/form" element={ <ProductForm /> } />
               <Route path="employees" element={<EmployeeList />} />
               <Route path="employee/form" element={<EmployeeForm />} />
               <Route path="employees/:employeeId" element={<EmployeeDetails />} />
               <Route path="Customers" element={<CustomerList />} />
               <Route path="Customers/:customerId" element={<CustomerDetails />} />





               
            </Route>
        </Routes>
    )
}

