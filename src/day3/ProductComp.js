import React from 'react'
import { Link, useParams } from 'react-router-dom'

export const ProductDetails = () => {
    const {id} = useParams()
    return (
        <div>
            <h2>Product Details for product id: {id}</h2>
        </div>
    )
}


export const ProductComp = () => {

    const products = [1,2,3,4,5]
  return (
    <div>
        <h2>Products</h2>
        <ul>
            {
                products.map((product)=>
                    <Link to={'/products/'+product}><li>Product {product}</li></Link>
                )
            }
        </ul>
    </div>
  )
}
