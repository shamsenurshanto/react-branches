import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
   // console.log(props.handlerFunction());
   const element = <FontAwesomeIcon icon={faShoppingCart} />
   const {name,price,img,stock} = props.product;
    return (
        <div>
            
           <div className="product-design">
           <img src={img} alt="" />
            <div className="details">
            <h3>{name}</h3>
            <p>{price}</p>
            <h5>{stock}</h5>
            <button className="btn-reg" onClick={()=>props.handlerFunction(props)}>{element}Add to Cart</button>
            </div>
           </div>
        </div>
    );
};

export default Product;