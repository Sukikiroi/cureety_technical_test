import React from 'react';

// redux package
import { useSelector } from 'react-redux'
const Pokemone = ({pokemonname}) => {

    const streamingdata = useSelector((state) => state.streamingdataReducer.streamingdata)
   
  console.log(streamingdata)
    return  <div>

 
  </div>
};

export default Pokemone;
