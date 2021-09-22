import logo from './logo.svg';
import './App.css';

function App() {

  
  return (
   
    <div className="App">
     <Person name="sakib"></Person>
    </div>
  );
}
 function Person(props)
 {
   console.log(props);
   const person={
    backgroundColor: "goldenrod",
    color:"#ffffff",
    width: "50%"
   }
   return (  

     <div style={person} >
       <h1>this is {props.name} </h1>
     </div>
   );
 }
export default App;
