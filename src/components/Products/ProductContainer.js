import { ProductSearch } from "./ProductSearch"
import { ProductList } from "./ProductsList"
import { useState } from "react"

export const ProductContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
    <ProductSearch setterFunction={setSearchTerms} />
    <ProductList searchTermState={searchTerms} />
    </>
}
