import React from 'react';
import Dashboard from '../Dashboard/Dashboard';

const Order = (props) => {
  console.log(props.cart.img)
    
    return (
        <div>
            
            <h2>item added : {props.cart.length}</h2>  
            <h1>Price </h1>
            {
            
           props.cart.map(imgg=><Dashboard img={imgg}></Dashboard>)
          
            
            
            
            }
        </div>
    );
};

export default Order;