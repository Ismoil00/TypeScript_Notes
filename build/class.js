"use strict";
// || CLASS:
/* class User {
  name: string;
  email: string;
  private city: string = "";
  constructor(name: string, email: string){
    this.name = name;
    this.email = email;
    this.city
  }
} */
class Users {
    constructor(name, email, userID) {
        this.name = name;
        this.email = email;
        this.userID = userID;
        // * By using 'protected'-keyword we make the variable avialable in the child classes besides parent class! 
        this.courseCount = 1;
    }
    get getEmail() {
        return `this is the ${this.email}`;
    }
    // * In TS setters do not accept any 'return declaration'!
    set setEmail(newEmail) {
        if (this.email === newEmail) {
            throw new Error("this email already exits!");
            return;
        }
        this.email = newEmail;
    }
    deleteEmail() {
        console.log(this.email);
    }
}
// * Class Inheritance;
class subUser extends Users {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount(newCourseCount) {
        this.courseCount = newCourseCount;
    }
}
const Ismoil = new Users("Ismoil", "ismoil@gmail.com", 125);
// Ismoil.deleteEmail();
