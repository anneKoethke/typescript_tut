/* const anchor = document.querySelector('a');
console.log(anchor.href); // error TS2531: Object is possibly 'null'. -> TS doesn't know the DOM beforehand, so could be null
 */

const anchor = document.querySelector('a')!; // '!' tells TS, there is an anchor; error suppressed (you should be sure of this)
console.log(anchor.href);