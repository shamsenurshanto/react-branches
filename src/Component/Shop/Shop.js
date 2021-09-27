import React, { useEffect, useState } from 'react';


import Order from '../Order/Order';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
  

   const [products,setProducts] = useState([]);
   const [cart,setCart] = useState([]);
   useEffect(()=>{
    fetch('../products.JSON').
    then(res=>res.json()).
    then(data=>{
        setProducts(data)
    })
   },[]);
   const handlerFunction = (props) =>{
       const {name,stock} = props.product;

       const newCart = [...cart,name];
       setCart(newCart);
       console.log(cart);
     
      
   }
    return (
        <div className="shopy">
            <div className="products-component">
                        <h1>products</h1>
                        {
                            products.map(product =><Product product={product} handlerFunction={handlerFunction}></Product>)
                        }
            </div>
            <div className="cart-component">
              
            <Order  cart={cart}></Order>
             </div>
        </div>
    );
};

export default Shop;