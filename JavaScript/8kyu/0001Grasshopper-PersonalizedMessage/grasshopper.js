
// Solution 2:
const greet = (name, owner) => name === owner ? "Hello boss" : "Hello guest";

// Solution 1:
function greet (name, owner) {
    if (name === owner) {
        return "Hello boss";
    } else {
        return "Hello guest";
    }
  }
