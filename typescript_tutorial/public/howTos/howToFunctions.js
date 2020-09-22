"use strict";
// get a tsconfig file to structure your compiling: tsc --init
// -> set 'rootDir' for the TS files and 'outDir' for the JS files
// -> terminal: tsc -w (instead of 'tsc root-path/TS-file.ts out-path/JS-file.js') 
/* FUNCTIONS */
let greet = () => {
    console.log('hello, world!');
};
// greet = 'hello'; // won't work, because no function
let greetInGerman; // 
greetInGerman = () => {
    console.log('Hallo Welt!');
};
//greetInGerman();
const add = (a, b) => {
    console.log(a + b);
};
//add(2,3);
// optional parameter
const addMany = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
//addMany(1,2);
// default value for optional parameter
const addManyWithDefaultValue = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
// addManyWithDefaultValue(1,3);
// addManyWithDefaultValue(1,3,20);
// addManyWithDefaultValue(1,3,'20');
/* FUNCTIONS WITH TYPE RETURN */
const minus = (a, b) => {
    return (a - b);
};
let result = minus(13, 5); // result gets the type of the return value of minus (number) 
//console.log(result);
// console.log(typeof result);
// result = 'number'; // won't work string != number
// decaring, that the functions return value is a number (to help others understand your code)
const minusWithInferredNumber = (a, b) => {
    return (a - b);
};
result = minusWithInferredNumber(3, 1);
//console.log(result);
//console.log(typeof result);
/* VOID FUNCTIONS: no return */
const voidFun = (a, b) => {
    //return a + b; //won't work
};
//voidFun(1,2); // won't work, because void has per def no return
const moreVoidFun = (a, b) => {
    console.log(a + b);
};
const logDetails = (uid, item) => {
    console.log(`${item} has an uid of ${uid}.`);
};
const userGreets = (user) => {
    console.log(`${user.name} says hallo!`);
};
const userGreetsAgain = (user) => {
    console.log(`${user.name} says hallo!`);
};
let currUser = { name: 'Steph', uid: 123 };
//userGreets(currUser);
//logDetails(123, 'ballon');
/* FUNCTION SIGNATURES */
// let gruessen: FUNCTION;
// example 1
let gruessen; // signature: gruessen takes to strings and returns void (nothing)
gruessen = (name, greeting) => {
    console.log(`${name} sagt ${greeting}.`);
};
gruessen("Berta", "hallo");
gruessen("Frieda", "hi");
// example 2
let calc; // signature of the function
calc = (numOne, numTwo, action) => {
    let result = 0;
    switch (action) {
        case 'add':
            result = numOne + numTwo;
            break;
        case 'substract':
            result = numOne - numTwo;
            break;
        case 'multiply':
            result = numOne * numTwo;
            break;
        case 'divide':
            result = numOne / numTwo;
            break;
        default:
            console.log(`No valid action used, instead used \'${action}\'. Please use \'add\', \'substract\', \'multiply\' or \'divide\'.`);
            break;
    }
    return result;
};
/* console.log(calc(1,2,'add'));
console.log(calc(5,2,'substract'));
console.log(calc(3,4,'multiply'));
console.log(calc(4,2,'divide'));
console.log(calc(4,2,'square'));
 */
// example 3
let logging; // signature
logging = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old.`);
};
logging({ name: 'Ella', age: 23 });
