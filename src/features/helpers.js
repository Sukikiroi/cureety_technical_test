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
  var start = Date.now();

  // task starts

  const compressed = lzwCompress.pack(value);
  // task ends

  var end = Date.now();
  console.log(`Execution time: ${end - start} ms`);
  let ExcutionTime = end - start;

  //When compression takes more than compressionTimeoutDelay
  if (ExcutionTime > compressionTimeoutDelay)
    // return the uncompressed data
    return value;
  //  if compression is fast  return the Copressed value
  else return compressed;
};

executionTimeCalculator(data);
