import { Outlet, Route, Routes } from "react-router-dom"
import { LocationsList } from "../Locations/LocationsList"

export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Kandy Korner</h1>

                    <Outlet />
                </>
            }>

                <Route path="locations" element={ <LocationsList /> } />
            </Route>
        </Routes>
    )
}