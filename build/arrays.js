"use strict";
// || ARRAYS:
// * We can also declare arrays this way!
const ourNames = [];
ourNames.push("ismoil", true, 100);
// * The annotation of complicated array!
const Friends = [
    ["ismoil", "sorbon"],
    false,
    {
        name: "Ismoil",
        isMarried: true,
        works: 1,
    },
    {
        color: 'red',
        size: 25,
    },
];
const objArray = [
    [
        [12, 20, 50],
        { name: "sorbon", age: 25 }
    ],
    "ismoil"
];
// * This type of array annotation does not let to have different data-type values in an array!
const newPlayers = ["ismoil", "sorbon", /* 2 */];
// || TUPLES:
// * has specific length and excepts specific types either!
let users = ["ismoil", "married", 24];
users.push(10);
console.log(users); // this is considered to be a gap using typescript so far!!!
