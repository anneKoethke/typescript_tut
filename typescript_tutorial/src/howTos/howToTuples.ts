/* TUPLES: like arrays, but with fixed positions */

let arr = ['Anna', 25, true];
// allowed actions
arr[0] = false;  
arr[1] = 'Frieda';
arr = [false, 'Carla', 1, 4, true, 'etc'];

let tup: [string, number, boolean] = ['Anna', 25, true];
// tup[0] = false; // error
tup[1] = 3; // allowed, because is an number on the index position, that allows numbers
// tup = ['Carla', 1, true, 'etc']; // error

let student: [string, number];
student = ['Berta', 213]; // allowed
student = ['Carla', 456]; // allowed
// student = [456, 'Carla']; // error

