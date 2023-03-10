import React from 'react';
import Product from '../Product/Product';
import './Home.css';


function Home() {
  return (
    <div>
      <img 
      className='home_image'
      src='https://m.media-amazon.com/images/I/61Ly9zlsGxL._SX1500_.jpg'></img>
      <Product 
      id ={12345} 
      title="hello"
      price={11}
      rating={5}
      image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg" 
      />
    </div>
  )
}

export default Home

// { product,id, title , price , rating ,image}
// Product    