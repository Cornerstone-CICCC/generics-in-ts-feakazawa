// Develop a generic function named `duplicateElements`
// that takes an array of type `T[]` and a number `n`,
// and returns a new array with each element duplicated `n` times.
// Test the function with different types of arrays and values
// of `n`.

function duplicateElements<T>(arr: T[], num: number) {
  let duplicated = [];
  let times = 0;

  if (arr.length === 0) {
    return "empty array";
  }

  for (let item of arr) {
    while (times < num) {
      duplicated.push(item);
      times++;
    }
    times = 0;
  }

  return duplicated;
}

console.log(duplicateElements([1, 2, 3], 5));
console.log(duplicateElements(["a", "b", "c"], 3));
console.log(duplicateElements([], 2));
console.log(
  duplicateElements(
    [
      ["hello", 2],
      ["world", 3],
    ],
    2,
  ),
);

console.log(duplicateElements([true, false], 4));
console.log(
  duplicateElements(
    [
      { id: "WD001", period: "morning" },
      { id: "WD002", period: "evening" },
    ],
    3,
  ),
);
