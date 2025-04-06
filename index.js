// index.js

import { UserDirectory, getData, greet } from "./tools.js";

// Test the class and Map
const directory = new UserDirectory();
directory.addUser(1, "Ademola");
directory.addUser(2, "Queenette");

console.log("User 1:", directory.getUser(1));
console.log("User 2:", directory.getUser(2));

// Test the greet function
console.log(greet("Developer"));

// Test the async + promise function
getData().then(result => {
  console.log(result);
});
