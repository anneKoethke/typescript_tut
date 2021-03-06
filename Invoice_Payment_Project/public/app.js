import { Invoice } from './classes/Invoice.js'; // IMPORTANT! MUST BE '.js', because that's what the browser sees!
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
// listTemplate instance
const ul = document.querySelector('ul'); // using a class here will cause an error (still working, but looks bad)
const list = new ListTemplate(ul);
const form = document.querySelector('.new-item-form');
// inputs 
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values); // spread operator
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
