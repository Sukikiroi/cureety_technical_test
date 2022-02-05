 
import './App.css';

import useFetch from "./utiles/useFetch"

import Pokemone from "./components/pokemone"


 

function App() {
   
   const [data,error,loading]=useFetch('wormadam')
   if(!loading){
    console.log(data)
   }
  //  console.log(JSON.parse(localStorage.getItem("data")))
  return (
    <div className="App">
      <Pokemone/>
    </div>
  );
}

export default App;
