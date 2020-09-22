"use strict";
// compile in terminal: tsc sandbox.ts sandbos.js
// if the TS and JS file are named the same or the JS doesn't exists, just use: tsc sandbox.ts
// -> watching changes: tsc sandbox.ts -w
// strict types in TS means you can't change a variables type later
/* PRIMITIVES */
let character = 'mario'; // TS is infering what type this is (inference)
let age = 35;
let isBlackBelt = false;
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(7.5));
/* ARRAY */
let names = ['Anna', 'Berta', 'Carla']; // type checked to String[]
names.push('Doris');
// names.push(3) // won't pass type check (no numbers, string array)
// names = "anne" // won#t pass type check (no array, no changing types)
let mixed = ['abc', 10, false, 'true', 4.56]; // 
mixed.push('yes');
mixed[0] = 1;
/* OBJECT */
let ninja = {
    name: 'Mario',
    belt: 'black',
    age: 30
};
ninja.name = 'ghost';
// ninja.age = "20"; // won't pass type check
// ninja.skills = ['fighting', 'sneaking'] // won't work, because changes the Object (no skills property initially declared)
// works, because the initial structure is not beeing changed (only the values of the properties)
ninja = {
    name: 'Yoshi',
    belt: 'yellow',
    age: 40,
};
/* EXPLICIT TYPES: declaring a type, but no value */
let u_name; // this will be a string, value set later
let u_age;
let u_isLoggedIn;
// u_age = 'Luis'; // won't work
u_age = 40;
// u_isLoggedIn = 'true'; // won't work
u_isLoggedIn = false;
/* ARRAYS AGAIN */
let ninjas; // this will be a string array
// ninjas = [1,2,3] // won't work
ninjas = ['Anna', 'Berta', 'Carla'];
// initialize as empty array for the push method to work 
let people = []; // this will be a string array, which has no entries yet
people.push('Dora');
people.push('Ella');
console.log(people); // output: Array [ "Dora", "Ella" ]
/* UNION TYPES */
let misto = []; // this is an empty array, which can have values of different types (string, number)
misto.push(20);
misto.push('abc');
// misto.push(false); // won't work, because type wasn't declared to be boolean
console.log(misto);
let uid;
uid = 1;
uid = '1';
// uid = false; // won't work
/* OBJECTS AGAIN */
let ninjaOne;
ninjaOne = { name: 'acb', age: 12 };
// ninjaOne = 'hello'; // won't work, because is a primitive type (string), not an object
ninjaOne = []; // does work, because an array is an object
// be more specific: it's an object with strict type properties
let ninjaTwo;
ninjaTwo = { name: 'Anna', age: 45, belt: 'green' };
// ninjaTwo = { name: 'Frieda', age: 25, belt: 'white', skills: ['sneaking'] }; // won't work, because skills property wasn't declared
/* ANY TYPE: like getting back to JS - you can do that, but you shouldn't */
let uncertain_age = 25; // currently of value 25 (number type), but can still be any type
uncertain_age = true; // works!
console.log(uncertain_age);
uncertain_age = 'Jana'; // works!
console.log(uncertain_age);
// any type for arrays seems nice
let gemisch = [];
gemisch.push(5);
gemisch.push('5');
gemisch.push(true);
console.log(gemisch);
//any type for objects
// let person = { name: any, age: any, belt: any }; // won't work, because '=' initializes, not declares
let person;
person = { name: 'Carla', age: 8, belt: true };
console.log(person);
person = { name: true, age: false, belt: 'something' }; // works, too, but doesn't make much sense
console.log(person);
