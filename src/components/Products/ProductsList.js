import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./ProductsList.css"
import { EmployeeNavBar } from "../nav/EmployeeNav"


export const ProductList = ({searchTermState}) => {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFiltered] = useState([])
    const [topPricedCandy, displayTopPriced] = useState(false)


    const localKandyUser = localStorage.getItem("kandy_user")
    // We are pulling this local kandy user object out of storage. We're grabbing it from the log in info. 
    const kandyUserObject = JSON.parse(localKandyUser)
    //Now we are making this string into an object with JSON.parse, so now we have an object with the properties//
    const navigate = useNavigate() //we have to invoke this to switch the navigation between web pages

    useEffect(
        () => {
            const searchedProducts = products.filter(product => 
                {
                    return product.name.toLowerCase().startsWith(searchTermState.toLowerCase())
        })
            setFiltered(searchedProducts)
        },
        [ searchTermState]
    )
    useEffect(
        () => {
            fetch(`http://localhost:8088/products?_expand=productType&_sort=name`) 
            // ?_sort=name gets it in alphabetical order
            // when adding more than one, you must replace the question mark with an &
            .then(response => response.json())
            .then((productArray) => {
            setProducts(productArray)

    })
},
//so we're grabbing the data from the serviceTickets and we're changing the initial state
//to the specific ticket array information. We want them to see the list of tickets.
        [] // When this array is empty, you are observing initial component state
    )

    useEffect(
      () => {
        if (kandyUserObject.staff) {
             //for employees
                 setFiltered(products)

           }
        
        },
        
        [products]
    )

    useEffect(
        () => {
            if(topPricedCandy) {
                const spendyCandy = products.filter(product => product.price > 2)
                setFiltered(spendyCandy)

            } 
        

        }
            ,[topPricedCandy]
        
            // We must set up a new variable for topPricedCandy and set it to a value of true.
        //   When it is true, we set up a variable called spendyCandy that filters all the products
        //   that cost more than two dollars. When we hit the button, we want to show all of the topPriced candy 
        //   which is we want to observe the topPriced candy at the bottom.

    )

    return <>
        {
kandyUserObject.staff 
   ? <>
<button onClick={() => displayTopPriced(true)} >Top Priced Candies</button>   
 {/* //all we have to say for the button is to display the top priced candy
        //invoke the function associated with the topPricedCandy */}
<button onClick={() => navigate("/product/form")}>Create Product</button>



{/* This button will navigate to a new web page for us to create the form 
// got to the application views and add the following route
//                <Route path="product/form" element={ <ProductForm /> } />
//                Notice how you take away the first slash there. } */}





        </>
        : ""
}
    <h2>List of Products</h2>
  
  
    <article className="products">
         {
            filteredProducts.map(
                // we are using products above to utilize our new data our variable has been set to.
                (product) => {
                    return <section className="product" key={`product--${product.id}`}> 
                    {/* // remember that keys must have the original vanilla javascript notation // */}
                   <header>Name: {product.name} <br />
                   Candy Type: {product.productType.name} </header>
                   <footer>Price: {product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
           })}</footer>
                    </section>
                }
            )}
                    
            
            


    </article>
    
    </>

}

