"use strict";
let worker = {
    id: 1,
    name: "Buzurg",
    address: "Dushanbe",
    retire: (date) => {
        return date;
    },
};
let newFriends = ["ismoil"];
let mySize = 7 /* Size.Large */;
console.log(mySize);
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
