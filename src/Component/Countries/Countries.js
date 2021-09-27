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
  
      <div className="">
         <h4>
      The countries  {country.length}
     <div className="design">
     { 
     
     country.map(cot => <Country 
       key={cot.name}
       name={cot}      
     ></Country> )
   }
     </div>
    
      
  
   </h4>
   
      </div>
     );
};

export default Countries;