import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const EmployeeForm = () => {
    
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [employee, updateNewEmployee] = useState({
        userId: 0,
        locationId: 0,
        startDate: "",
        payRate: ""

    })
   
    const [user, updateNewUser] = useState({
        isStaff: false,
        fullName: ""
    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
    const navigate = useNavigate()

    useEffect(() => {
        if (employee.userId !== 0) {
          fetch('http://localhost:8088/employees', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
          })
          .then(response => response.json())
          .then(createdUser => {
            const createdUserCopy = { ...employee };
            createdUserCopy.userId = createdUser.id
            updateNewEmployee(createdUserCopy);
            navigate("/Employees")
          });
        }
      }, [employee]);
      
      

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        
         fetch (`http://localhost:8088/users?_expand=location`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })

        .then(response => response.json())
        .then((createdUser) => {
            const copy = {...employee}
            copy.userId = createdUser.id
            updateNewEmployee(copy)

        })

            


    }

    return (
        <form className="employeeForm">
        
            <h2 className="employeeForm__title">New Employee Form</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Employee:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="We judge strictly on the coolness of your name."
                        value={user.fullName}
                        onChange={
                            (evt) => {
                                const copy = {...user}
                                copy.fullName = evt.target.value
                                updateNewUser(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
  <div className="form-group">
    <label htmlFor="type">Location</label>
    <select id="locationType" value={employee.locationId} onChange=
    {(evt) => {
      const copy = { ...employee };
      copy.locationId = parseInt(evt.target.value);
      updateNewEmployee(copy);
    }}>
      <option value="0">Your New Home</option>
      <option value="1"> 2299 Rothgreat Avenue</option>
      <option value="2">224 RothGood Avenue</option>
      <option value="3">Rothbad Avenue</option>
    </select>
  </div>
</fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Start Date:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="The first day of the rest of your life."
                        value={employee.startDate}
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.startDate = evt.target.value
                                updateNewEmployee(copy)
                                
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
    <div className="form-group">
        <label htmlFor="price">Pay Rate:</label>
        <input
            type="text"
            value={isNaN(employee.payRate) ? '' : employee.payRate} // Check if payRate is NaN and display an empty string if true
            onChange={(evt) => {
                const copy = { ...employee };
                const inputValue = parseFloat(evt.target.value);
                copy.payRate = isNaN(inputValue) ? '' : inputValue; // Check if the parsed value is NaN and set an empty string if true
                updateNewEmployee(copy);
            }}
        />
    </div>
</fieldset>

                                
            <button 
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
                Create the Employee
            </button>
        </form>
    )
                
            
                    }
                
            