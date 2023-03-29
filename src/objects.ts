// OBJECTS:
// * we can change object keys' values, but we can't add another "key-value"!
// * annotated object function within object type does not need later annotation (when created)!
interface Employees {
  id: number;
  name: string;
  // Optional!
  status?: boolean;
  // not later assignable!
  readonly address: string;
  retire: (date: number) => number;
}

let worker: Employees = {
  id: 1,
  name: "Buzurg",
  address: "Dushanbe",
  retire: (date) => {
    return date;
  },
};

type Friends = [string | number];
let newFriends: Friends = ["ismoil"];

//  ENUMS (a related list of constants):
// * Enum is like an objects whose values can't be changed and it's intented to be used in many places!
// * Enums values can not change because they are 'read-only' property!
// * if we varify 'Enums' with 'const' then we get more optimized js codes after compilation!
const enum Size {
  Small = 5,
  Medium,
  Large,
}
let mySize: Size = Size.Large;

console.log(mySize);

// INTERSECTION TYPE:
// * Intersection type is like "and (&)"!
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIdesign = Draggable &
  Resizable & {
    move: () => void;
  };

let newObj: UIdesign = {
  drag: () => console.log("the object is dragged"),
  resize: () => console.log("the object is resized"),
  move: () => console.log("the object has been moved"),
};

// LITERAL TYPE:
// * Literal type limits what will be assigned to variables but not their data-type!
type Brothers = "ismoil" | "buzurg";
type Quantity = 50 | 100;

let string: Brothers = "ismoil";
let number: Quantity = 50;

// Optional property access operator:
type Customer = { birthday: Date };
function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(10);
console.log(customer?.birthday.getFullYear());

// optional call:
// * this function runs only when the return is not null;
let log: any = null;
log?.(10);

// || Index Signatures & keyof Assertion:
interface TransactionType {
  // * index signature:
  readonly [index: string]: number | string;
  pizza: number;
  pasta: number;
  25: string;
}

const Transactions: TransactionType = {
  pizza: 10,
  pasta: 20,
  25: "30",
  index: 50,
};

// * Index Signatures help us to escape problems with "Dynamic Object Props":
const allTransactions = (): number => {
  let total = 0;
  for (let transaction in Transactions) {
    total += Transactions[transaction] as number;
  }
  return total;
};

// * with index signature we encounter another problem:
let firstKey = Transactions["Ismoil"]; // we don't have this key, but excepts it!

// * solving the same "Dynamic Object Props" with "as keyof assertion":
interface Student {
  // [key: string]: string | number | string[] | undefined;
  name: string;
  GPA: number;
  classes?: string[];
}

const student: Student = {
  name: "Ismoil",
  GPA: 3.75,
  classes: ["Algebra", "Geology"],
};

for (let key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
  console.log(`${key}: ${student[key as keyof typeof student]}`);
});

const ConsoleStudent = (student: Student, key: keyof Student) => {
  console.log(`${key}: ${student[key]}`);
};
