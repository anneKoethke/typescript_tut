"use strict";
/* CLASSES */
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        // this.client = 'Frieda'; // won't work, because of readonly modifier
        return this.client + " owes \u00A3" + this.amount + " for " + this.details + ".";
    };
    return Invoice;
}());
var invOne = new Invoice('Mario', 'Plumming', 250);
var invTwo = new Invoice('Luigi', 'Website', 300);
var invThree = new Invoice('Yoshi', 'Jumping', 100);
// console.log(invOne.format());
// console.log(invTwo.format());
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.push(invThree);
// console.log(invoices);
invoices.forEach(function (inv) {
    //console.log(inv.client, inv.details, inv.amount, ':', inv.format()); // can#t log details, because they are private now
    // inv.client = 'Frieda'; // won't work, because of readonly modifier
    console.log(inv.format());
});
/* FASTER (SHORTER) CONSTRUCTION OF A CLASS */
var Payment = /** @class */ (function () {
    // this only works, if there are the access modifiers (public, private, readonly)
    function Payment(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Payment.prototype.format = function () {
        return this.client + " was payed \u00A3" + this.amount + " for " + this.details + ".";
    };
    return Payment;
}());
var payOne = new Payment('Anne', 'drinking coffee', 50);
var payTwo = new Payment('Berta', 'having fun', 450);
var payments = [];
payments.push(payOne);
payments.push(payTwo);
payments.forEach(function (pay) {
    console.log(pay.format());
});
var form = document.querySelector('.new-item-form'); // now TS knows, but for Firefox they look the same ...
// console.log(form.children);
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
