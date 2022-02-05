import React from 'react';

import { makeStyles } from '@mui/styles';

// Card Component
import PokemonCard from "./pokemonCard"

const PokemonContainer = ({data}) => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* {data.map((item, key) => {
        return <div key={key}>
      <PokemonCard/>

        </div>;
      })} */}
    </div>
  );
};

export default PokemonContainer;






const useStyles = makeStyles({
    root: {
     width:'100%',
     height:'100%',
     padding:'40px',
     display:'grid',
    
     gridTemplateColumns:'auto auto auto'
    },
  });