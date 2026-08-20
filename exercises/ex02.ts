// Create a generic function named `identity` that takes a
// single argument of type `T` and returns that argument.
// Create a few test cases, such as using the function with
// numbers, strings, and custom objects to demonstrate its
// type flexibility.

const identify = <T>(arg: T) => {
  let result = "";

  typeof arg === "number"
    ? (result = `${arg} is number`)
    : typeof arg === "string"
      ? (result = `${arg} is string`)
      : typeof arg === "boolean"
        ? (result = `${arg} is boolean`)
        : typeof arg === "undefined"
          ? (result = `${arg} is undefined`)
          : typeof arg === "function"
            ? (result = `${arg} is function`)
            : typeof arg === "object"
              ? (result = `${arg} is object`)
              : (result = "It wasn't possible identify this argument");

  return result;
};

const printHello = () => console.log("Hello");

console.log(identify(123));
console.log(identify("hello"));
console.log(identify(true));
console.log(identify(undefined));
console.log(identify(printHello));
console.log(identify(["apple", "orange"]));
console.log(identify({ name: "John", age: 22 }));
console.log(identify(null));
console.log(identify(Symbol()));
