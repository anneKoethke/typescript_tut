// compile in terminal: tsc sandbox.ts sandbos.js
// if the TS and JS file are named the same or the JS doesn't exists, just use: tsc sandbox.ts
// -> to automate the compile process: tsc file.ts -w
var character = 'mario';
console.log(character);
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    console.log(input);
});
