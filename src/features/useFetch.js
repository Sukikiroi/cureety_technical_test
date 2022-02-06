import { useState, useEffect } from "react";

import {useDispatch } from "react-redux";
import { addfetchedata } from "../slices/streamingData";

//Global Base Url
import { BaseUrl } from "./global";

//  Helper Function
import { loadState, updateRequestedCachedData, IsCached } from "./localstorage";

const useFetch = (query) => {
  // Streaming Data state as Array
  const [streamingData, setstreamingData] = useState();

  // Loading State  as Boolean
  const [loading, setloading] = useState(true);

  // error State as Boolean
  const [error, seterror] = useState(false);

  const dispatch = useDispatch();

  if (query === undefined) {
    query = "";
  }

  useEffect(() => {
    
    fetch(BaseUrl + query)
      .then(async (response) => {
        const data = await response.json();
        let payload = [
          {
            key: query,
            data: data.abilities,
          },
        ];
         

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

       

        console.log(IsCached(query));

       
        // If Data Is Cached we load state from Local Storage
        if (IsCached(query)) {
          // Get The Cached Data
          console.log(loadState(query));
          setstreamingData(loadState(query));
          // Update The Cached Data In Background
          updateRequestedCachedData(query);
        } else {
          dispatch(addfetchedata(payload));
          setstreamingData(data.abilities);
        }

        setloading(false);
      })
      .catch((error) => {
        console.error("There was an error!", error);
        seterror(true);
      });
  }, [query,dispatch]);
  //  return states as Array
  return [streamingData, error, loading];
};

// Exporting the hook
export default useFetch;
