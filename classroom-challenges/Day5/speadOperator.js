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
