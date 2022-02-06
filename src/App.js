import "./App.css";

import useFetch from "./features/useFetch";

import Pokemone from "./components/pokemone";

import MyFancyLoader from "./components/myfancyLoader";

import PokemonContainer from "./components/pokemonContainer"

import {updateCachedData}  from "./features/localstorage"

function App() {
   
 
 
  return (
    <div className="App">
      <PokemonContainer />
    </div>
  );
}

export default App;
