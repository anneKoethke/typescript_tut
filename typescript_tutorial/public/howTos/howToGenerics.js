"use strict";
/* GENERICS, i.e. reusable code blocks with different types */
// const addUid = (obj: object) => { // the properties are forgotten hereafter 
// const addUid = <T>(obj: T) => { // T is the Generic, it captures the item passed to the function and it's properties, but it would take eversthing (also primitives)
// const addUid = <T extends object>(obj: T) => { // now it must be an object
const addUid = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc_1 = addUid({ name: 'Frieda', age: 40 });
// let doc_2 = addUid('hello'); // no object
console.log(doc_1.name);
console.log(doc_1.age);
const doc_3 = {
    uid: 1,
    resourceName: 'person',
    data: 'Dora' // so data property can be a string now, without throwing an error
};
const doc_4 = {
    uid: 2,
    resourceName: 'person',
    data: { name: 'Ella', age: 40 }
};
const doc_5 = {
    uid: 3,
    resourceName: 'shopping list',
    data: ['milk', 'coffee', 'pastries']
};
console.log(doc_3, doc_4, doc_5);
