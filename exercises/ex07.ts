// Implement a generic function called `filterByType` that
// takes an array of type `T[]` and a type `U`.
// It should return a new array containing only elements of
// type `U`.
// Test the function with arrays containing various types and
// different target types `U`.

const filterByType = <T, U>(arr: T[], type: U) => {
  const checkType = arr.filter((item) => typeof item === type);

  if (checkType.length === 0) {
    throw new Error("array can not be empty");
  }

  return checkType;
};

console.log(filterByType(["a", "b", "c", 1, 3, "g", 5], "string"));
console.log(filterByType(["a", "b", "c", 1, 3, "g", 5], "number"));
console.log(filterByType(["a", true, false, 1, true, "g", true], "boolean"));
console.log(filterByType([[1, 2, 3], "a", "b", 123, [4, 5]], "object"));
console.log(
  filterByType(
    ["a", "b", { id: "WD001", period: "morning" }, "t", 0],
    "object",
  ),
);

try {
  filterByType([], "string");
} catch (err) {
  if (err instanceof Error) {
    console.log(err.message);
  }
}

try {
  filterByType(["a", "b", "c", 1, 3, "g", 5], "boolean");
} catch (err) {
  if (err instanceof Error) {
    console.log(err.message);
  }
}
