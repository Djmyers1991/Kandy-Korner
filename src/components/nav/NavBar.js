import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

//we are creating the buttons for the navbar in this unit.
//the Link tab will have a class name, to (representing where it will take us), and onClick.
//the onClick will tell us what event will transpire when the link is clicked.
export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
           <li className="navbar__item active">
                <Link className="navbar__link" to="/Locations">Locations</Link>
            </li>
        {/* What is happening above is that I've created a link which will take us 
        to the locations page which has been established on the applicationViews. 
        the route path is the /locations, so we need to link it in the Applicatinon views*/}

            <li className="navbar__item active">
                <Link className="navbar__link" to="/Products">Products</Link>
            </li>
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("kandy_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>

        </ul>
    )

            }



