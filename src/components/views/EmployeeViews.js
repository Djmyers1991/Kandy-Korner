import { Outlet, Route, Routes } from "react-router-dom"
import { LocationsList } from "../Locations/LocationsList"
import { ProductList } from "../Products/ProductsList"
import { ProductForm } from "../Products/ProductForm"
import { ProductSearch } from "../Products/ProductSearch"

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


               
            </Route>
        </Routes>
    )
}

