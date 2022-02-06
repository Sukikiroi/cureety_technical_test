import React from "react";

import { makeStyles } from "@mui/styles";
import useFetch from "../features/useFetch";

// Card Component
import PokemonCard from "./pokemonCard";

// Loader Component
import MyFancyLoader from "./myfancyLoader";
const PokemonContainer = () => {
  const [data, error, loading] = useFetch("venusaur");
  const classes = useStyles();
  console.log(data);
  console.log(error);
  return (
    <div className={classes.root}>
      {loading ? (
        <MyFancyLoader />
      ) : (
        data.map((item, key) => {
          return (
            <div key={key}>
              <PokemonCard />
            </div>
          );
        })
      )}
    </div>
  );
};

export default PokemonContainer;

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    padding: "40px",
    display: "grid",

    gridTemplateColumns: "auto auto auto",
  },
});
