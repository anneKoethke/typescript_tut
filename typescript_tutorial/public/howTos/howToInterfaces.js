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
/* CLASSES WITH INTERFACES */
import { Invoice } from '../classes/Invoice.js'; // IMPORTANT! MUST BE '.js', because that's what the browser sees!
import { Payment } from '../classes/Payment.js';
// makes sure, those variables have a format() method
let docOne;
let docTwo;
docOne = new Invoice('Carla', 'web work', 250);
docTwo = new Payment('Dora', 'buying coffee', 50);
// makes sure that only such variables with a format() method can be added
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
// format() needs no arguments, because it'S dealed with internally
console.log(docs[0].format());
console.log(docs[1].format());
