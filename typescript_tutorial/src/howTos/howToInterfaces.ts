/* INTERFACE */

interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

// const me: isPerson = {}; // not working, interface enforces a structure in an object without a constructor
const me: isPerson = {
  name: 'Ella',
  age: 60,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent £'+ amount +'.');
    return amount;
  }
}

const greetPerson = (person: isPerson) => {
  console.log('hello', person.name);
}

greetPerson(me);

/* CLASSES WITH INTERFACES */

import { Invoice } from '../classes/Invoice.js'; // IMPORTANT! MUST BE '.js', because that's what the browser sees!
import { Payment } from '../classes/Payment.js';
import { HasFormatter } from '../interfaces/HasFormatter.js';

// makes sure, those variables have a format() method
let docOne: HasFormatter;
let docTwo: HasFormatter

docOne = new Invoice('Carla', 'web work', 250);
docTwo = new Payment('Dora', 'buying coffee', 50);

// makes sure that only such variables with a format() method can be added
let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);
// format() needs no arguments, because it'S dealed with internally
console.log(docs[0].format());
console.log(docs[1].format());