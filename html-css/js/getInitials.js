// An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents the first letter of both the arguments.
// For the arguments  Roger and Waters, the function returns ‘RW’. Write this function.

const getInitials = (firstName, lastName) => {
  const firstInitial = firstName.charAt(0);
  const lastInitial = lastName.charAt(0);
  return firstInitial + lastInitial;
};

const firstName = "Zemoso";
const lastName = "Labs";

const initials = getInitials(firstName, lastName);
console.log(initials);
