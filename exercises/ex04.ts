// Write a generic function called `getFirstElement` that accepts
// an array of type `T[]` and returns the first element.
// Create test cases using arrays of various types to demonstrate
// that the function works correctly.
// Don't forget to cover the situation where the array is empty.

const getFirstElement = <T>(arr: T[]) => {
  const first = arr[0];

  if (typeof arr === "object" && arr.length === 0) {
    return "empty array";
  }

  if (
    typeof first === "string" ||
    typeof first === "number" ||
    typeof first === "object" ||
    typeof first === "boolean"
  ) {
    return first;
  }
};

console.log(getFirstElement(["john", "violet", "lucas"]));
console.log(getFirstElement([90, 13, 78, 99]));
console.log(
  getFirstElement([
    { name: "Sophie", age: 22 },
    { name: "Charles", age: 45 },
    { name: "Beth", age: 31 },
  ]),
);
console.log(getFirstElement([]));
console.log(getFirstElement([false, true, true]));
