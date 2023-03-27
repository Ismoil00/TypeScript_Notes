"use strict";
// OBJECTS:
// * we can change any object variable, but unlike JS in TS we can not add an other one!
// * If we want to add one sooner then we should create it first and give it empty/other value that we asign it later!
let user = {
    id: 1,
    name: "Ismoil" /* , hasFax: false */,
};
user.hasFax = true;
// * As always we can skip annotation of course!
let employee = { id: 1, name: "Sorbon", status: "" };
employee.status = "is married";
// * If we don't want any object value not to be changed later, then we can use "readonly" before its key while annotating!
let friend = {
    name: "Sorbon",
    status: "",
};
// friend.name = "Somon";  ---  this one does not work!
friend.status = "is married";
// * If we annotate function within object annotation - then later we don't have to annotate it when we create this object function. However, if an object is not annotated at all - then while creating an object we have to annotate its function right there!
let worker = {
    id: 1,
    name: "Buzurg",
    retire: (date) => {
        return date;
    },
};
worker.retire(16111118841998);
let mySize = 7 /* Size.Large */;
console.log(mySize);
let apple = {
    id: 1,
    color: "red",
    buy: (price) => console.log(price),
};
let newFriends = ["ismoil"];
// UNION TYPE:
// * Union type is like "or (||)" and it allows us to use several data-types for a variable!
function kgToLbs(weight) {
    if (typeof weight === "number")
        weight * 2.2;
    else
        parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10kg");
let newObj = {
    drag: () => console.log("the object is dragged"),
    resize: () => console.log("the object is resized"),
    move: () => console.log("the object has been moved"),
};
let string = "ismoil";
let number = 50;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(10);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday.getFullYear());
// optional call:
// * this function runs only when the return is not null;
let log = null;
log === null || log === void 0 ? void 0 : log(10);
