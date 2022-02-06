import "./App.css";

import useFetch from "./features/useFetch";

import Pokemone from "./components/pokemone";

import MyFancyLoader from "./components/myfancyLoader";

import PokemonContainer from "./components/pokemonContainer"

import {updateCachedData}  from "./features/localstorage"

function App() {
   
  const [data, error, loading] = useFetch('clefairy');
 
  return (
    <div className="App">
      {loading ? <MyFancyLoader /> : <PokemonContainer />}
    </div>
  );
}

export default App;
