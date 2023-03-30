// || ARRAYS:
// * We can also declare arrays this way!
type RareArType = Array<string | number | boolean>;
const ourNames: RareArType = [];
ourNames.push("ismoil", true, 100);

// * The annotation of complicated array!
type ComplicatedArOne = (string[] | boolean | User | {})[];
const Friends: ComplicatedArOne = [
  ["ismoil", "sorbon"],
  false,
  {
    name: "Ismoil",
    isMarried: true,
    works: 1,
  },
  {
    color: "red",
    size: 25,
  },
];

type ComplicatedArTwo = (string | (number[] | {})[])[];
const objArray: ComplicatedArTwo = [
  [[12, 20, 50], { name: "sorbon", age: 25 }],
  "ismoil",
];

// * Union Array:
type StrOrNumAr = string[] | number[];
const newPlayers: StrOrNumAr = [/* "ismoil", "sorbon", */ 2, 10];

// || TUPLES:
// * has specific length and excepts specific types either!
type TupleOne = [string, string, number];
let users: TupleOne = ["ismoil", "married", 24];
users.push(10);

console.log(users); // this is considered to be a gap using typescript so far!!!