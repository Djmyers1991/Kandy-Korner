import { useEffect, useState } from "react"
import { useNavigate} from "react-router-dom"
import "./LocationsList.css"

export const LocationsList = () => {
    const [locations, setLocations] = useState([]) // the initial value of locations is an empty array.
    //location is an empty variable and setLocations is a function used to set the new locations
    
    
    const navigate = useNavigate() //we have to invoke this to switch the navigation between web pages
    
    
    useEffect(
        () => {
            fetch(` http://localhost:8088/locations`)//here, we are fectching the locations
            .then(response => response.json())//this is the code to instigate the fetch call from json
            .then((LocationsArray) => { //we are setting up a new array called TicketArray which will capture the data  fetched from the API
            setLocations(LocationsArray) //
    
    })
    },
   

        []
    )
    
    return <>
   
    
    <h2>List of Locations</h2>
    <article className="locations">
        {
            locations.map(
                (location) => {
                    return <section className="location" key={`location--${location.id}`}> 
                    {/* remember that keys must have the original vanilla javascript notation */}
                   <header>Location: {location.address}</header>
                   <footer>Square Feet: {location.squareFeet}</footer>
                    </section>
                }
            )
        }

    </article>
    
    </>

}

// This jsx to establish state


