import React from 'react';
import { makeStyles } from '@mui/styles';



const PokemonCard = () => {
    const classes = useStyles();

    
  return <div className={classes.root}>

g



  </div>;
};

export default PokemonCard;







const useStyles = makeStyles({
    root: {
     width:'300px',
     height:'150px',
     backgroundColor:'white',
     border:'1px solid Highlight',
     padding:'30px',
     marginBottom:'30px'
     
    },
  });