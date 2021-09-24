import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  

  return (
   
    <div className="App">
     
      <Countries>

      </Countries>
   
    </div>
  );
}
 function Countries()
 { 
 
  const [country,setCountry] = useState([]);
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
 
 </h4>
 
    </div>
   );
 }
 function Country(props){
  
  //  const ar = {country.map(cot=>{
  //   // console.log(cot.name);
  //   {cot.name}
  // })}
  console.log(props.name)
  return(
  
    <div>
      <h1>
        Let's visit {props.name}
       

      </h1>
    </div>
  );
}
export default App;
