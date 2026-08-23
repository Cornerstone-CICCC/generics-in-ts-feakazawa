// Define a generic function named `createPair` that takes
// two arguments of types `A` and `B` and returns them as a
// pair within an array `[A, B]`.
// Provide test cases using different types for `A` and `B`
// parameters.

const createPair = <A, B>(arg1: A, arg2: B) => {
  return [arg1, arg2];
};

console.log(createPair("good", "morning"));
console.log(createPair(123, 456));
console.log(createPair("good", 123));
console.log(createPair(true, false));
console.log(createPair("good", true));
console.log(createPair(false, 34));
console.log(createPair([1, 2, 3], [8, 9, 0]));
console.log(createPair([1, 2, 3], "ola"));
console.log(createPair([1, 2, 3], 56));
console.log(createPair([1, 2, 3], true));
console.log(
  createPair(
    { id: "WD001", period: "morning" },
    { id: "WD002", period: "evening" },
  ),
);

console.log(createPair({ id: "WD001", period: "morning" }, "apple"));
console.log(createPair({ id: "WD001", period: "morning" }, 789));
console.log(createPair({ id: "WD001", period: "morning" }, false));
