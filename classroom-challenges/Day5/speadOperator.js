/*
    -SPREAD OPERATOR
        - The spead operator pulls out all the elements in an array and gives them back to you as a standalone list of elements.
        - It takes the iterable object and/or object and expands it into individual elements. The spread operator is typically used to make
        copies of an array/object.
        - Denoted by the ellipsis(...)

*/

let students = ["Jake Greene", "Stephanie Falls"];

//WRONG SYNTAX
// ...students

// let copiedStudents = [...students]; //The spread operator is good at making a new copy of that array.
let copiedStudents = [...students]; //NOTE: This is not doing the same thing as the spread operator

students.push("Leslie Phillips");
console.log(copiedStudents, "Line 15");
// console.log(students, copiedStudents);
console.log(students, "Line 17");

const persons = [
  { name: "Taylor", age: 300 },
  { name: "Ryan", age: 25 },
];

const copiedPersons = [...persons];

persons.push({ name: "Quinn", age: 24 });
console.log(persons, copiedPersons);

//MATH
console.log(Math.min(1, 5, -3));
let prices = [10.99, 5.99, 3.99, 6.59];
console.log(Math.min(...prices)); //NaN
console.log(Math.min(...prices)); //Standalone elements.

//CONCATENATE ARRAYS
let sent1 = [1, 2, 3, 4];
let sent2 = [5, 6, 7, 8];
let concat = [...sent1, ...sent2];
console.log(concat);

//PASS ARGUMENTS
let sentence = ["Oh hi mark", false, 2];

function sent(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

sent(...sentence);

//COPY AN OBJECT
let obj = { a: 1, b: 2, c: 3 };
copyObj = { ...obj };
// copyObj = {obj}; //NOT the same

console.log(copyObj, obj);

//MERGE OBJECTS
let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { d: 4, e: 5, f: 6 };

let merge = { ...obj1, ...obj2 };
console.log(merge, obj1);

let obj1 = { a: "Hello", b: "Mark", c: "!" };
let obj2 = { a: "Goodbye" };

let merge = { ...obj1, ...obj2 };
console.log(merge);

let obj = { a: 1, b: 2, C: 3 };
let copyObj = [...obj];

console.log(copyObj);
