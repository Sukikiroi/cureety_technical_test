import sizeof from "object-sizeof";


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

export const saveState = (key, value) => {
  try {
    executionTimeCalculator(value)
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    if (error === "QUOTA_EXCEEDED_ERR") {
      alert("Quota exceeded!"); //data wasn't successfully saved due to quota exceed so throw an error
      // Delete And Remplace Algorithme
      delteandreplace(value);
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

export const delteandreplace = (value) => {
  let protectedItems = ["patiens", "doctors"];
  // This How Much space Needed for the New Value
  let spaceNeeded = sizeof(value);

  const keys = { ...Object.keys(localStorage) };
  const items = [];
  for (let index in keys) {
    items.push(loadState(keys[index]));
    console.log(sizeof(items[index]));

   


    for (let i = 0; (i = KeyBigerSpace(keys[index]).length); i++) {
      for (let j = 0; (j = protectedItems.length); j++) {
        if (KeyBigerSpace(keys[index])[i] != protectedItems[j]) {
          removeItem(KeyBigerSpace(keys[index])[i]);
          return 1;
        }
      }
    }
  }
};


export const compressData=()=>{

}


export const removeItem = (key) => {
    localStorage.removeItem(key);
  };