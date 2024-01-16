// Function to concat first and last name.
function concatNames(firstName, lastName) {
  return firstName + " " + lastName;
}

// Function that takes an concatNames function and two values
function concat(operation, x, y) {
  return operation(x, y);
}

// Pass the 'concatNames' function as a parameter to 'concat'
var result = concat(concatNames, "Zemoso", "Labs");
console.log("Result of addition:", result);
