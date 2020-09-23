"use strict";
/* INTERFACE */
// const me: isPerson = {}; // not working, interface enforces a structure in an object without a constructor
const me = {
    name: 'Ella',
    age: 60,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent £' + amount + '.');
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
