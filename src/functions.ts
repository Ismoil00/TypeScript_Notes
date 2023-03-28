// || FUNCTIONS:

// * If function paramter has default value then it is optional to pass argument for it or not!
function calculateTax(income: number, textYear = 2000, isPaid = false): number {
  if (textYear < 2023 && isPaid) return income * 1.5;
  else return income * 2;
}

calculateTax(50_000, undefined);
calculateTax(50_000);
// -----------------------------------------------------------------------------------------------

// || NEVER Examples:
// * 'Never' means this function never returns any value!
function handleError(erMsg: string): never {
  throw new Error(erMsg);
}

const infinite = () => {
  let n: number = 1;
  while (true) {
    n++;
    // if (n > 100) break;
  }
};

// * helpful case of NEVER type:
const NeverFun = (val: string | number): string => {
  if (typeof val === "string") return "string"
  else if (typeof val === "number") return "number"
  throw new Error("this is NEVER type");
}
// -----------------------------------------------------------------------------------------------

// * When a function returns any type of object;
function getUserData(): {} {
  return { name: "Sorbon", id: 12345 };
}
// -----------------------------------------------------------------------------------------------

// * When a function returns specified type of object;
function getUserInfo(): { name: string; isMarried: boolean } {
  return { name: "Sorbon", isMarried: true };
}

type User = {
  name: string;
  isMarried: boolean;
  works: number;
  //using '?' makes it optional!
  hasCar?: boolean;
};
// -----------------------------------------------------------------------------------------------

// * Passing object directly does not work, so you can use 'type' aliase instead!
function getUserinformation(
  user: User /* {name: string, isMarried: boolean, works: number} */
): void {
  console.log(`${user.name} is married and he does not work anywhere!`);
}

getUserinformation({ name: "Ismoil", isMarried: true, works: 0 });
// -----------------------------------------------------------------------------------------------

// * Function type aliases:
type Plus = (num1: number, num2: number) => number;

interface Minus {
  (num1: number, num2: number): number;
}

const sumNumbers: Plus = (c, d) => {
  return c + d;
};

const subtractNumbers: Minus = (c, d) => {
  return c - d;
};

const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};
total(1, 2, 3, 4, 5);
// -----------------------------------------------------------------------------------------------

// When parameter type is optional with "?":
const sumAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "number") {
    return a + b;
  }
  return a + b + c;
};
