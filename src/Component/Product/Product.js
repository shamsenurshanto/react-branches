import React from 'react';
import './Product.css'

const Product = (props) => {
   // console.log(props.handlerFunction());
   const {name,price,img,stock} = props.product;
    return (
        <div>
            
           <div className="product-design">
           <img src={img} alt="" />
            <div className="details">
            <h3>{name}</h3>
            <p>{price}</p>
            <h5>{stock}</h5>
            <button className="btn-reg" onClick={()=>props.handlerFunction(props)}>Add to Cart</button>
            </div>
           </div>
        </div>
    );
};

export default Product;