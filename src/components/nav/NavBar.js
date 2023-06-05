import "./NavBar.css"
import { CustomerNavBar } from "./CustomerNav"
import { EmployeeNavBar } from "./EmployeeNav"

//we are creating the buttons for the navbar in this unit.
//the Link tab will have a class name, to (representing where it will take us), and onClick.
//the onClick will tell us what event will transpire when the link is clicked.
export const NavBar = () => {
    
    	
    const localKandyUser = localStorage.getItem("kandy_user")
    // We are pulling this local kandy user object out of storage. We're grabbing it from the log in info. 
    const kandyUserObject = JSON.parse(localKandyUser)
    //Now we are making this string into an object with JSON.parse, so now we have an object with the properties//
    

    if(kandyUserObject.staff === true) {

        return <EmployeeNavBar />

    }
else {
    return <CustomerNavBar />

}
}