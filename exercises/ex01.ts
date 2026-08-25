// Create a function called concatSum that takes two generic
// arguments.
// These arguments could be strings or numbers.
// If both are strings, use the concat method; otherwise,
// just sum the numbers.
// If they are not of the same type, print an error message
// to the console; If they are not string or number, print
// an error message

const concatSum = <T>(arg1: T, arg2: T) => {
  if (typeof arg1 === "string" && typeof arg2 === "string") {
    return arg1.concat(arg2);
  } else if (typeof arg1 === "number" && typeof arg2 === "number") {
    return arg1 + arg2;
  } else {
    throw new Error("Type should be number or string");
  }
};

console.log(concatSum("fernanda", "roberta"));
console.log(concatSum(30, 150));

try {
  concatSum(true, false);
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}
