import React, { useEffect, useState } from 'react';

const Shop = () => {
   const [products,useProducts] = useState([]);
   useEffect(()=>{
   fetch('./products.JSON').then(res => res.json()).
   then(data => useProducts(data))},[])
    return (
        <div>
            <h1>product{products.length}</h1>
        </div>
    );
};

export default Shop;