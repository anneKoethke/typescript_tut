import { Invoice } from './classes/Invoice.js'; // IMPORTANT! MUST BE '.js', because that's what the browser sees!
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// listTemplate instance
const ul = document.querySelector('ul')!; // using a class here will cause an error (still working, but looks bad)
const list = new ListTemplate(ul);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs 
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  
  let values: [string, string, number] = [tofrom.value, details.value, amount.valueAsNumber]

  let doc: HasFormatter;

  if(type.value === 'invoice') {
    doc = new Invoice(...values); // spread operator
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, 'end');

})
