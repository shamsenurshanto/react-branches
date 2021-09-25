import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
  
    const [country,setCountry] = useState([])
    useEffect(()=>{
     
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(data =>console.log(setCountry(data))
   )

    },[]);
   
    
    // const b ;
    
     return (  
  
      <div>
         <h4>
      The countries are {country.length}
      { 
     
      country.map(cot => <Country name={cot.name}></Country> )
    }
    
      { 
     
      country.map(cot =>   console.log(cot.name) )
    }
  
   </h4>
   
      </div>
     );
};

export default Countries;