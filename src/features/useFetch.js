import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { updatePatients, updatecancerOrigins } from "../slices/streamingData";

//  Helper Function
import { loadState, updateRequestedCachedData, IsCached } from "./localstorage";
import { customFetch } from "./helpers";

const useFetch = (callback)=>  {
  let resultcallback = callback(customFetch);
  var patients, cancerOrigins;
  const [isLoading, setisLoading] = useState(true);
 
  const [streamingdata, setstreamingdata] = useState({
    patients: "patients",
    cancerOrigins: "cancerOrigins",
  });
  const dispatch = useDispatch();

  useEffect(async () => {
    
    // If Data Is Cached we load state from Local Storage
    if (IsCached("patients")) {
      // Get The Cached Data
      patients = loadState("patients");
    } else {
      patients = await resultcallback.patients;
      dispatch(updatePatients(patients));
    }
    // If Data Is Cached we load state from Local Storage
    if (IsCached("cancerOrigins")) {
      // Get The Cached Data

      cancerOrigins = loadState("cancerOrigins");
    } else {
      cancerOrigins = await resultcallback.cancerOrigins;
      dispatch(updatecancerOrigins(patients));
    }

    setisLoading(false);

    setstreamingdata({
      patients: patients,
      cancerOrigins: cancerOrigins,
    });
  }, [dispatch]);

  return [streamingdata, isLoading];
};

// Exporting the hook
export default useFetch;
