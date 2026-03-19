let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, property) {
  // Declare a result variable
  let result;

  // Logic to find the contact and store the result
  const person = contacts.find(p => p.firstName === name);

  if (!person) {
    result = "No such contact";
  } else if (person.hasOwnProperty(property)) {
    result = person[property];
  } else {
    result = "No such property";
  }

  // Return the result
  return result;
}
