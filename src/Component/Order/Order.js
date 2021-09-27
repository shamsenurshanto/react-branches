import React from 'react';

const Order = (props) => {
  console.log(props.cart)
    
    return (
        <div>
            
            <h2>item added : {props.cart.length}</h2>
            <h1>Price </h1>
        </div>
    );
};

export default Order;