import { useState, useEffect } from "react";

const useFetch = () => {
  const [streamingData, setstreamingData] = useState();

  useEffect(() => {
    setstreamingData("Hi Pockemon");
  });

  return streamingData;
};


// Exporting the hook
export default useFetch
