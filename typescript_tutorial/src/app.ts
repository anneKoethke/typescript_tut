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
import { HasFormatter } from './interfaces/HasFormatter.js';

