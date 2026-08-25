// Develop a generic function named `customMap` that takes
// an array of type `T[]` and a mapping function
// `mapper: (item: T) => U`, and returns a new array of
// type `U[]`.
// Test the function with arrays of different types and
// custom mapping functions.

function customMap<T, U>(arr: T[], mapper: (item: T) => U): U[] {
  const result: U[] = [];

  for (const item of arr) {
    result.push(mapper(item));
  }

  return result;
}

//U: boolean
const numbers = [1, 2, 3, 4, 5];
console.log(customMap(numbers, (num) => num % 2 === 0));

// U: number
const ages = [45, 18, 7, 16, 3, 9, 12, 23];
console.log(customMap(ages, (age) => age * 2));

// U: string
const animals = ["dog", "cat", "goose", "snake"];
console.log(customMap(animals, (animal) => `I have a ${animal}`));

// U: array [deposit, withdrawal]
const balances = [
  [100, -25],
  [0, -30],
  [20, 0],
];
console.log(customMap(balances, (balance) => balance));

// U: object
const students = [
  { name: "Alex", age: "22" },
  { name: "Sophie", age: "26" },
  { name: "Martha", age: "30" },
];
console.log(customMap(students, (student) => student.name));
