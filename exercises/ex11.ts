// Create a generic function named `safeAccess` that safely
// accesses nested properties of an object using an array of
// keys.
// Demonstrate the function with different object structures
// and key sequences, including arrays and objects.

function safeAccess<T>(obj: T, keys: string[]) {
  let current: any = obj;

  for (const key of keys) {
    if (current === null || current === undefined) {
      return undefined;
    }
    current = current[key];
  }

  return current as T;
}

const user = {
  id: 1,
  profile: {
    name: "Alice",
    address: {
      city: "São Paulo",
      zipCode: "01000-000",
    },
  },
};

const city = safeAccess(user, ["profile", "address", "city"]);
console.log(city);

const name = safeAccess(user, ["profile", "name"]);
console.log(name);

const employee = {
  id: "5889004A",
  profile: {
    name: "John",
    email: "john@test.com",
    area: {
      areaName: "Consultant",
      manager: "Paula Torres",
      managerContact: {
        phone: "+1 (778) 345-9090",
        email: "paula.torres@test.com",
      },
    },
  },
};

const employeeEmail = safeAccess(employee, ["profile", "email"]);
console.log(employeeEmail);

const managerEmail = safeAccess(employee, [
  "profile",
  "area",
  "managerContact",
  "email",
]);
console.log(managerEmail);

const invalidProperty = safeAccess(employee, ["age"]);
console.log(invalidProperty);
