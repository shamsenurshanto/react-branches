import React from 'react';
import './Country.css'
const Country = (props) => {
    console.log(props.name)
    return(
  
        <div>
          <h1>
            Let's visit : <span className="menu" >{props.name}</span> 
           
    
          </h1>
        </div>
      );
};

export default Country;