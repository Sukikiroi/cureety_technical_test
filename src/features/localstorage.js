import sizeof from "object-sizeof";

// Global Variable
import { BaseUrl } from "./global.js";
//Compress Package
import {executionTimeCalculator}  from "./helpers.js"
 

export const loadState = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (key,value,compressionTimeoutDelay,protectedFromCleaning) => {
  try {
    console.log('i saved')
    //Result data May be a Compressed or original Data if Compression Delay it pass 200ms
    let resultdata=executionTimeCalculator(value,compressionTimeoutDelay)
     
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    if (error === "QUOTA_EXCEEDED_ERR") {
      alert("Quota exceeded!"); //data wasn't successfully saved due to quota exceed so throw an error
      // Delete And Remplace Algorithme
      delteandreplace(value,protectedFromCleaning);
    }
  }
};



export const KeyBigerSpace = (key, value) => {
  let KeyofBigerItem = [];

  // This How Much space Needed for the New Value
  let spaceNeeded = sizeof(value);

  if (sizeof(localStorage.getItem(key)) > spaceNeeded) {
    KeyofBigerItem.push(key);
  }
  return KeyofBigerItem;
};

export const delteandreplace = (value,protectedFromCleaning) => {
 
  // This How Much space Needed for the New Value
  let spaceNeeded = sizeof(value);

  const keys = { ...Object.keys(localStorage) };
  const items = [];
  for (let index in keys) {
    items.push(loadState(keys[index]));
    console.log(sizeof(items[index]));

   


    for (let i = 0; (i = KeyBigerSpace(keys[index]).length); i++) {
      for (let j = 0; (j = protectedFromCleaning.length); j++) {
        if (KeyBigerSpace(keys[index])[i] != protectedFromCleaning[j]) {
          removeItem(KeyBigerSpace(keys[index])[i]);
          return 1;
        }
      }
    }
  }
};

// Function To Know If Data is Being Chached
export const IsCached=(key)=>{
 if (localStorage.getItem(key)) return true
 else return false
}


export const removeItem = (key) => {
    localStorage.removeItem(key);
  };

// Function To Update Cached Data as a Crone
export const updateCachedData = () => {
  const keys = { ...Object.keys(localStorage) };
  for (let index in keys) {
    // Simple GET request using fetch
    fetch(BaseUrl + keys[index]).then((response) => {
      localStorage.setItem(keys[index], JSON.stringify(response));
    });
  }
};  

// Update the Cached Data evry 1 minute
//setInterval(updateCachedData(), 60 * 1000); // 60 * 1000 milsec

// Update the Cached Data In Background
export const updateRequestedCachedData=(requesteddata)=>{
 // Simple GET request using fetch
 fetch(BaseUrl + requesteddata).then(async( response) => {

  const data = await response.json();
 
  localStorage.setItem(requesteddata, JSON.stringify(data.abilities));
});
}

 