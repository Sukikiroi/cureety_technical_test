import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addfetchedata } from "../slices/streamingData";

const useFetch = (query) => {
  // Streaming Data state as Array
  const [streamingData, setstreamingData] = useState();

  // Loading State  as Boolean
  const [loading, setloading] = useState(true);

  // error State as Boolean
  const [error, seterror] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon-species/" + query)
      .then(async (response) => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        let payload = [
          {
            key: query,
            data: data.abilities,
          },
        ];

        dispatch(addfetchedata(payload));
        setstreamingData(payload);
        setloading(false);
      })
      .catch((error) => {
        console.error("There was an error!", error);
        seterror(true);
      });
  }, []);
  //  return states as Array
  return [streamingData, error, loading];
};

// Exporting the hook
export default useFetch;
