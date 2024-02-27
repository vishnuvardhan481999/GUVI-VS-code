//Data Types
//Primitive Data types
//Number
console.log(typeof 5); //integer or floeat values
//string
console.log(typeof "5");// character encoded in " " or ''
//Boolean
console.log(typeof true); // true or false

let a = 10
let b = a
console.log (a);
console.log (b);
b = 15;
console.log(a);
console.log(b);

let sam_arr = [1,2,3];
sam_arr2 = sam_arr;
console.log(sam_arr);
console.log(sam_arr2);
sam_arr2[1] = 4;
console.log(sam_arr);
console.log(sam_arr2);

let ano_arr =[5,6,7];
let ano_arr2 = Object.assign([], ano_arr);
console.log(ano_arr);
console.log(ano_arr2);
ano_arr2[1] = 8;
console.log(ano_arr);
console.log(ano_arr2);
