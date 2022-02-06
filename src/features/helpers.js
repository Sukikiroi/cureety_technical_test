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
    (testdata = executionTimeCalculator(value, compressionTimeoutDelay)),
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

 
