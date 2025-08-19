/* Data Types */
/*
let name = 'John';
let age = 30;                           // Variable Type
let person = {                          // Reference Type
    name: 'Brad',
    age: 40
}
*/
/* console.log(name);
console.log(person.name);
let newName = name;
console.log(newName);
newName = 'Matthew';
console.log(name); */
/*
let newPerson = person;                 // Both point the same memory location. Hence value of both will be changed.
newPerson.name = 'Matthews';
console.log(person);
console.log(newPerson);
*/
// String Properties
let x;
const s = "Hello World";
// x = s.__proto__;
// x = s.substring(0, 5);   // Hello
// x = s.slice(0, 5);       // Hello
x = s.slice(-11, -1);        // Hello Worl (string slice() also )
console.log(x);