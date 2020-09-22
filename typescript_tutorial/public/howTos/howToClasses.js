"use strict";
/* CLASSES */
class Invoice1 {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        // this.client = 'Frieda'; // won't work, because of readonly modifier
        return `${this.client} owes £${this.amount} for ${this.details}.`;
    }
}
const invOne = new Invoice1('Mario', 'Plumming', 250);
const invTwo = new Invoice1('Luigi', 'Website', 300);
const invThree = new Invoice1('Yoshi', 'Jumping', 100);
// console.log(invOne.format());
// console.log(invTwo.format());
let invoice1s = [];
invoice1s.push(invOne);
invoice1s.push(invTwo);
invoice1s.push(invThree);
// console.log(invoice1s);
invoice1s.forEach(inv => {
    //console.log(inv.client, inv.details, inv.amount, ':', inv.format()); // can#t log details, because they are private now
    // inv.client = 'Frieda'; // won't work, because of readonly modifier
    console.log(inv.format());
});
/* FASTER (SHORTER) CONSTRUCTION OF A CLASS */
class Payment {
    // this only works, if there are the access modifiers (public, private, readonly)
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} was payed £${this.amount} for ${this.details}.`;
    }
}
const payOne = new Payment('Anne', 'drinking coffee', 50);
const payTwo = new Payment('Berta', 'having fun', 450);
let payments = [];
payments.push(payOne);
payments.push(payTwo);
payments.forEach(pay => {
    console.log(pay.format());
});
const form = document.querySelector('.new-item-form'); // now TS knows, but for Firefox they look the same ...
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
