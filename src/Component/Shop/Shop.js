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
    return (
        <div className="shopy">
            <div className="products-component">
                        <h1>products</h1>
                        {
                            products.map(product =><Product name={product.name}></Product>)
                        }
            </div>
            <div className="cart-component">
            <h1>products</h1>
             </div>
        </div>
    );
};

export default Shop;