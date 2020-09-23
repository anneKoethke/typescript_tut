/* MODULES (ES6 Module System -> needs a modern browser! ) */
// to make this work: 
// -> in tsconfig.json: change '"target": "es5",' to '"target": "es6",' 
// -> in tsconfig.json: change '"module": "commonjs",' to '"module": "es2015",'
// -> in index.html: change '<script src='app.js'></script>' to '<script type="module" src='app.js'></script>'

// modules like so have two drawbacks:
// 1. no old browser!
// 2. no bundling into a single file
// -> webpack solves both of these problems 

import { Invoice } from './classes/Invoice.js'; // IMPORTANT! MUST BE '.js', because that's what the browser sees!
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// listTemplate instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs 
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if(type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, 'end');
});

const bla: string = "bla";