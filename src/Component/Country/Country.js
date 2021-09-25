import React from 'react';
import './Country.css'
const Country = (props) => {
   console.log(props )
    const {name,id} = props.name;
    return(
  
        <div className="menu ">
          <h1>
            Let's visit : <span className="" > {name},{id}</span> 
   
          </h1>
        </div>
      );
};

export default Country;