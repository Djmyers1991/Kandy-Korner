import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const ProductForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [product, update] = useState({
        name: "",
        price: "",
        productTypeId: "",

    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
    const navigate = useNavigate()

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        //this click event corresponds with the button below.
        // TODO: Create the object to be saved to the API
        //productId: 0
        //name: ""
        //price: 0

        // TODO: Perform the fetch() to POST the object to the API

        const productToSendToApi = {
            productTypeId: product.productTypeId,
            name: product.name,
            price: product.price
        }
        fetch(`http://localhost:8088/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productToSendToApi)
        })
        .then(response => response.json())
        .then(() => {
            navigate("/products")
        }
        
        )

    }

    return (
        <form className="productForm">
            <h2 className="productForm__title">New Product Form</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Product:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="We're open-minded. Candy is what you want it to be."
                        value={product.name}
                        onChange={
                            (evt) => {
                                const copy = {...product}
                                copy.name = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input type="text"
                        value={product.price}
                        onChange={
                            (evt) => {
                                
                            
                                const copy = {...product}
                                copy.price = parseFloat(evt.target.value)
                                update (copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
  <div className="form-group">
    <label htmlFor="type">Candy Type</label>
    <select id="candyType" value={product.productTypeId} onChange=
    {(evt) => {
      const copy = { ...product };
      copy.productTypeId = parseInt(evt.target.value);
      update(copy);
    }}>
      <option value="0">Select your type</option>
      <option value="1">Licorice</option>
      <option value="2">Chocolate</option>
      <option value="3">Grain</option>
    </select>
  </div>
</fieldset>

            <button 
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
                Create The Candy
            </button>
        </form>
    )
                }