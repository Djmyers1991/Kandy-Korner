import { useEffect, useState } from "react"
import { useNavigate} from "react-router-dom"
import "./LocationsList.css"

export const LocationsList = () => {
    const [locations, setLocations] = useState([]) // the initial value of locations is an empty array.
    
    
    const navigate = useNavigate()
    
    
    useEffect(
        () => {
            fetch(` http://localhost:8088/locations`)//here, we are fectching the locations
            .then(response => response.json())//this is the code to instigate the fetch call from json
            .then((LocationsArray) => { //we are setting up a new array called TicketArray which has been fetched from the API
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
                    return <section className="location"> 
                   <header>Location: {location.address}</header>
                   <footer>Square Feet: {location.squareFeet}</footer>
                    </section>
                }
            )
        }

    </article>
    
    </>

}




// useEffect(
//     () => {
//            fetch(`http://localhost:8088/locations`) //here, we are fetching the locations
//            .then(response => response.json()) //this is the code to instigate a fetch call from json
//            .then((locationsArray) = { // we are setting up a new array called ticketArray we are then going to set
//             setTickets(locationsArray)

//            })
//         },
