import { CustomerViews } from "./CustomerViews"
import { EmployeeViews } from "./EmployeeViews"


export const ApplicationViews = () => {
	
    const localKandyUser = localStorage.getItem("kandy_user")
    // We are pulling this local kandy user object out of storage. We're grabbing it from the log in info. 
    const kandyUserObject = JSON.parse(localKandyUser)
    //Now we are making this string into an object with JSON.parse, so now we have an object with the properties//
    

    if(kandyUserObject.staff) {

        return <EmployeeViews />

    }
else{
    return <CustomerViews />

}

     
}

