import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Employee } from "./Employee"

export const EmployeeList = () => {
const [employees, setEmployees] = useState([])

const navigate = useNavigate()

useEffect(
    () => {
        fetch(`http://localhost:8088/users?isStaff=true`)
        .then(response => response.json())
        .then((employeeArray) => {
            setEmployees(employeeArray)
        })
    },
    []
)
return <article className="employees">
{
        employees.map(employee => 
        <Employee key={`employee--${employee.id}`}
        id={employee.id} name={employee.name} email={employee.email} />)
            

            
        

    }

<button onClick={() => navigate("/employee/form")}>Create Employee</button>

</article>


}

