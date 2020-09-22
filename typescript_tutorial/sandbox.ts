// compile in terminal: tsc sandbox.ts sandbos.js
// if the TS and JS file are named the same or the JS doesn't exists, just use: tsc sandbox.ts
// -> watching changes: tsc sandbox.ts -w

// strict types in TS means you can't change a variables type later

let character = 'mario'; // TS is infering what type this is (inference)
let age = 35;
let isBlackBelt = false;

const circ = (diameter: number) => { // this type check is done, before compiled to JS file
  return diameter*Math.PI;
}

console.log(circ(7.5));