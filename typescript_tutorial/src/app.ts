/* MODULES (ES6 Module System -> needs a modern browser! ) */
// to make this work: 
// -> in tsconfig.json: change '"target": "es5",' to '"target": "es6",' 
// -> in tsconfig.json: change '"module": "commonjs",' to '"module": "es2015",'
// -> in index.html: change '<script src='app.js'></script>' to '<script type="module" src='app.js'></script>'

// modules like so have two drawbakcs:
// 1. no old browser!
// 2. no bundling into a single file
// -> webpack solves both of these problems 

import { Invoice } from './classes/Invoice.js'; // IMPORTANT! MUST BE '.js', because that's what the browser sees!

let invoices: Invoice[] = [];
const client_1 = new Invoice('Anna', 'website work', 250);
const client_2 = new Invoice('Berta', 'database work', 450);

invoices.push(client_1);
invoices.push(client_2);

invoices.forEach(inv => {
  console.log(inv.format());
})
