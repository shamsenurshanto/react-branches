import logo from './logo.svg';
import './App.css';

function App() {
  const cinemas = [
    {  heroine : 'herosn'},
    {  heroine : 'herosn2'},
    {  heroine : 'he4rosn'}

  ]
  
  return (
   
    <div className="App">
     <Person name="sakib"></Person>
    
     {
       cinemas.map(
         kcn=> <Moviess hero={kcn.heroine} ></Moviess>    
       )
     }
  
    </div>
  );
}
 

 function Moviess(props)
 {
  const person={
    backgroundColor: "cyan",
    color:"#ffffff",
    width: "50%"
   }
   console.log(props);
   return (

    <div style={person} >
       <h1> hero name is {props.hero}</h1>
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
