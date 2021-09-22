import logo from './logo.svg';
import './App.css';

function App() {

  
  return (
   
    <div className="App">
     <Person>

     </Person>
    </div>
  );
}
 function Person()
 {
   const person={
    backgroundColor: "goldenrod",
    color:"#ffffff",
    width: "50%"
   }
   return (  

     <div style={person} >
       <h1>this is </h1>
     </div>
   );
 }
export default App;
