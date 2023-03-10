import React from 'react'
import "./Product.css";
function Product({ id ,title, price,rating,image}) {
  return (
    <div className='product'>
        <p>{title}</p>
        <p className="product_price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="product__rating">
           
        </div>
       
    </div> 
  )
}

export default Product
