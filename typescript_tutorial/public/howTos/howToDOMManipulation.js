"use strict";
// const anchor = document.querySelector('a'); //  TS doesn't know the DOM beforehand, so this could be null
// console.log(anchor.href); // -> error TS2531: Object is possibly 'null'.
const anchor2 = document.querySelector('a'); // '!' tells TS, there is an anchor; error suppressed (you should be sure of this)
console.log(anchor2.href);
const form2 = document.querySelector('form'); // same problem
const form1 = document.querySelector('.new-item-form'); // classes and ids would work, but this now is just an <Element>, i.e. doesn't recognize HTMLFormElement
// console.log(form1.children); // doesnot work, would work with '!' above
