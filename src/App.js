import "./App.css";

import useFetch from "./utiles/useFetch";

import Pokemone from "./components/pokemone";

import MyFancyLoader from "./components/myfancyLoader";

import PokemonContainer from "./components/pokemonContainer"

function App() {
  const [data, error, loading] = useFetch();
  if (!loading) {
    console.log(data);
  }
  //  console.log(JSON.parse(localStorage.getItem("data")))
  return (
    <div className="App">
      {loading ? <MyFancyLoader /> : <PokemonContainer />}
    </div>
  );
}

export default App;
