import React, { useState } from 'react'



function Products() {
    const [Products, editProduct] = useState([
        {productId:1, productName:'Book1', price: 200},
        {productId:2, productName:'Book2', price: 402},
        {productId:3, productName:'Book3', price: 700},
    ])

    function handleDelete(productId){
        // let newProducts = []
        // Products.map((product)=>{
        //     if (product.productId !== productId) {
                
        //         newProducts.push(product)
        //     }
        // }
        // )
        // editProduct(newProducts)


        // editProduct(Products.filter((product) => product.productId !== productId))
        Products.splice((product) => product.productId === productId,1)
        editProduct([...Products])
    }
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <table class='table'>
            <thead>
                <tr>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                </tr>
            </thead>
            <tbody>
                {   
                    // map is a callback function 
                    // we dont have to use () as product is only one
                    Products.map((product) =>
                        <tr key={product.productId}>
                            <td>{product.productId}</td>
                            <td>{product.productName}</td>
                            <td>{product.price}</td>
                            <td><button onClick={()=>handleDelete(product.productId)}>Delete</button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default Products