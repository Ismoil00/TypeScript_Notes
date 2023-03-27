"use strict";
// || GENERICS:
// * This generic declaration returns the same data-type which it accepted as an argument!
function identity(val) {
    return val;
}
identity(false);
identity("false");
identity(0);
function carShow(carObject) {
    return carObject;
}
// _______________________________________________________________________
// Accepting Array and returning one of its value:
function arrayFunc(product) {
    //doing some database operation;
    return product[0];
}
//Accepting and returning an Array:
const arrayFunct = (product) => {
    //doing some database operation;
    return product;
};
// _______________________________________________________________________
// Generics in case of Objects:
function genericFunc(name, age) {
    return {
        name: name,
        age: age,
    };
}
genericFunc("Ismoil", 25);
// Yes, we can make generic declarations specific as well:
function genericFunct(name, age) {
    return {
        name: name,
        age: age,
    };
}
genericFunct("Ismoil", /* "25" */ 25);
