import {BaseUrl }from "./global"
var lzwCompress = require("lzwcompress");

let data = [
  {
    name: "John",
    age: 30,
    cars: ["Ford", "BMW", "Fiat"],
  },
  {
    name: "John",
    age: 30,
    cars: ["Ford", "BMW", "Fiat"],
  },
  {
    name: "John",
    age: 30,
    cars: ["Ford", "BMW", "Fiat"],
  },
  {
    name: "John",
    age: 30,
    cars: ["Ford", "BMW", "Fiat"],
  },
  {
    name: "John",
    age: 30,
    cars: ["Ford", "BMW", "Fiat"],
  },
  {
    name: "John",
    age: 30,
    cars: ["Ford", "BMW", "Fiat"],
  },
  {
    name: "John",
    age: 30,
    cars: ["Ford", "BMW", "Fiat"],
  },
  {
    name: "John",
    age: 30,
    cars: ["Ford", "BMW", "Fiat"],
  },
  {
    name: "John",
    age: 30,
    cars: ["Ford", "BMW", "Fiat"],
  },
  {
    name: "John",
    age: 30,
    cars: ["Ford", "BMW", "Fiat"],
  },
  {
    name: "John",
    age: 30,
    cars: ["Ford", "BMW", "Fiat"],
  },
  {
    name: "John",
    age: 30,
    cars: ["Ford", "BMW", "Fiat"],
  },
  {
    name: "John",
    age: 30,
    cars: ["Ford", "BMW", "Fiat"],
  },
  {
    name: "John",
    age: 30,
    cars: ["Ford", "BMW", "Fiat"],
  },
  {
    name: "John",
    age: 30,
    cars: ["Ford", "BMW", "Fiat"],
  },
  {
    name: "John",
    age: 30,
    cars: ["Ford", "BMW", "Fiat"],
  },
  {
    name: "John",
    age: 30,
    cars: ["Ford", "BMW", "Fiat"],
  },
  {
    name: "John",
    age: 30,
    cars: ["Ford", "BMW", "Fiat"],
  },
  {
    name: "John",
    age: 30,
    cars: ["Ford", "BMW", "Fiat"],
  },
  {
    name: "John",
    age: 30,
    cars: ["Ford", "BMW", "Fiat"],
  },
];

const executionTimeCalculator = (value, compressionTimeoutDelay) => {
  const compressed = lzwCompress.pack(value);

  return compressed;
};

const getdataafterMaxDelay = (compressionTimeoutDelay) => {
  let testdata;
  setTimeout(
    (testdata = executionTimeCalculator(data, compressionTimeoutDelay)),
    200
  );
  console.log(testdata);
};


var compressed;
export const compressme=(value)=>{
  compressed = lzwCompress.pack(value);
  return  compressed
}



export const compressedornot = () => {
  if (compressed == undefined) return data;
  else return compressed
};

 // Custom Fetch as async Function
export async function customFetch(query) {
  let res = await fetch(BaseUrl+query);
  let data = await res.json();
  return data;
}

//stop it after a set time has passed (e.g. 200 ms) 
const stopafterdelay=(data)=>{
  var startTime = new Date().getTime();
  var interval = setInterval(function(){
      if(new Date().getTime() - startTime > 60000){
          clearInterval(interval);
          return data;
      }
      //do whatever here..
      compressme(data)
  }, 2000);

}

console.log(stopafterdelay(data))