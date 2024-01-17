// Refactor the following function into a one-liner:
const printName = (name) => {
  return "Hi " + name;
};

const printName1 = (name) => "Hi " + name;

console.log(printName("Pavan Marri"));
console.log(printName1("Pavan Marri"));

// Rewrite the following code using template literals
const printBill = (name, bill) => {
  return "Hi " + name + ", please pay: " + bill;
};

const printBill1 = (name, bill) => `Hi  ${name} , please pay:  ${bill}`;

console.log(printBill("Pavan", 123));
console.log(printBill1("Pavan", 123));

//Modify the following code such that the object properties are destructured and logged.
const person = {
  name: "Noam Chomsky",
  age: 92,
};

let personName = person.name;
let personAge = person.age;
console.log(personName);
console.log(personAge);

const { name, age } = person;
console.log(name);
console.log(age);
