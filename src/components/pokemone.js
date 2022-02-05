import React from 'react';

// redux package
import { useSelector } from 'react-redux'
const Pokemone = ({pokemonname}) => {

    const streamingdata = useSelector((state) => state.streamingdataReducer.streamingdata)
   
  console.log(streamingdata)
    return  <div>

<h1>Balbasor</h1>
<h1>{pokemonname}</h1>
  </div>
};

export default Pokemone;
