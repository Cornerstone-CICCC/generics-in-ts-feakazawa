// Implement a generic function named `reverseArray` that takes
// an array of type `T[]` and reverses the order of elements
// in the same array.
// Provide test cases using arrays of different types, including
// numbers, strings, and custom objects.

function reverseArray<T>(arr: T[]) {
  if (
    typeof arr[0] === "string" ||
    typeof arr[0] === "number" ||
    typeof arr[0] === "object" ||
    typeof arr[0] === "boolean"
  ) {
    return arr.toReversed();
  }
}

console.log(reverseArray(["fernanda", "roberta", "adriana"]));
console.log(reverseArray([1, 2, 3, 55, 22]));
console.log(reverseArray(["apple", 12, "old", 35]));

const workers = [
  { name: "Sophie", age: 22 },
  { name: "Charles", age: 45 },
  { name: "Beth", age: 31 },
  { name: "Alexandra", age: 19 },
];

console.log(reverseArray(workers));
console.log(reverseArray([false, true, true, false, false]));
