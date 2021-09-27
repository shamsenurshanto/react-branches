import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
   const [products,setProducts] = useState([]);
   useEffect(()=>{
    fetch('../products.JSON').
    then(res=>res.json()).
    then(data=>{
        setProducts(data)
    })
   },[]);
   const handlerFunction = (props) =>{
       const {name,stock} = props.product;
       console.log(name);
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
            <h1>products Item</h1>
            <h1>Price</h1>
             </div>
        </div>
    );
};

export default Shop;