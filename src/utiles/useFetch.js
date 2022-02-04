import { useState, useEffect } from "react";

const useFetch = () => {

    // Streaming Data state as Array
  const [streamingData, setstreamingData] = useState();

   // Loading State  as Boolean
   const [loading, setloading] = useState(true);

 



  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
    .then(async response => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        setstreamingData(data)
        setloading(false)
       
    })
    .catch(error => {
       
        console.error('There was an error!', error);
       
    });
  },[]);
    //  return states as Array
  return [streamingData,loading];
};


// Exporting the hook
export default useFetch
