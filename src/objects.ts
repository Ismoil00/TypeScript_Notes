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
