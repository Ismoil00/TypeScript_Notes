"use strict";
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return "This is not Admin Account";
}
//___________________________________________________________________________
// 'instanceof' - keyword is like 'in'-keyword but it is usually used when 'new'-keyword is used to create data-type;
new Date();
function instanceofFunc(argument) {
    if (argument instanceof Date) {
        return new Date().getFullYear();
    }
    return "pass valid argument to get Date data-type!";
}
const isFish = (pet) => {
    return pet.swim !== undefined;
};
const fishFood = (pet) => {
    if (isFish(pet)) {
        pet;
        return "This is fish food";
    }
    else {
        pet;
        return "This is bird food";
    }
};
// 'Discriminated Union' - approach does not let us know that a new declaration was taken into consideration;
function getFullArea(figure) {
    if (figure.kind === "circle") {
        return Math.PI * Math.pow(figure.radius, 2);
    }
    else if (figure.kind === "square") {
        return figure.side * figure.side;
    }
    else if (figure.kind === "rectangle") {
        return figure.width * figure.length;
    }
}
// 'Exhaustiveness Checking with never' approach gives us warning in case of new declaration is taken into consideration:
function getArea(figure) {
    switch (figure.kind) {
        case "circle":
            return Math.PI * Math.pow(figure.radius, 2);
        case "square":
            return figure.side * figure.side;
        case "rectangle":
            return figure.width * figure.length;
        default:
            const _figureDefaultValue = figure;
            return _figureDefaultValue;
    }
}
