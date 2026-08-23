// Implement a generic function named `reverseArray` that takes
// an array of type `T[]` and reverses the order of elements
// in the same array.
// Provide test cases using arrays of different types, including
// numbers, strings, and custom objects.

function reverseArray<T>(arr: T[]) {
  let reversedArray = arr.toString().split(",").toReversed();

  if (typeof arr[0] === "string") {
    return reversedArray;
  }

  if (typeof arr[0] === "number") {
    const numbArray = reversedArray.map((item) => Number(item));
    return numbArray;
  }

  if (typeof arr[0] === "object") {
    return arr.toReversed();
  }
}

console.log(reverseArray(["fernanda", "roberta", "adriana"]));
console.log(reverseArray([1, 2, 3]));
console.log(reverseArray(["apple", 12, "old", 35]));
console.log(reverseArray([56, "bye", "hello", 11]));

const workers = [
  { name: "Sophie", age: 22 },
  { name: "Charles", age: 45 },
  { name: "Beth", age: 31 },
  { name: "Alexandra", age: 19 },
];

console.log(reverseArray(workers));
