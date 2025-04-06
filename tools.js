// tools.js

// 1. Class (with Map usage inside)
export class UserDirectory {
    constructor() {
      this.users = new Map(); // ES6 Map
    }
  
    addUser(id, name) {
      this.users.set(id, name);
    }
  
    getUser(id) {
      return this.users.get(id);
    }
  }
  
  // 2. Promise function
  export function fetchDataMock() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data fetched successfully!");
      }, 1000);
    });
  }
  
  // 3. Async function that uses the promise
  export async function getData() {
    try {
      const result = await fetchDataMock();
      return result;
    } catch (error) {
      return "Error fetching data";
    }
  }
  
  // 4. A simple modular function
  export function greet(name) {
    return `Hello, ${name}!`;
  }
  