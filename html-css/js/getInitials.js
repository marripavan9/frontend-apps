const getInitials = (firstName, lastName) => {
  const firstInitial = firstName.charAt(0);
  const lastInitial = lastName.charAt(0);
  return firstInitial + lastInitial;
};

const firstName = "Zemoso";
const lastName = "Labs";

const initials = getInitials(firstName, lastName);
console.log(initials);
