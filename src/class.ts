
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
  // * By using 'protected'-keyword we make the variable avialable in the child classes besides parent class! 
  protected courseCount: number = 1;

  constructor(
    public name: string, 
    public email: string, 
    private userID: string | number
    ){
  }
  get getEmail():string {
    return `this is the ${this.email}`;
  }
  // * In TS setters do not accept any 'return declaration'!
  set setEmail(newEmail: string) {
    if (this.email === newEmail) {
      throw new Error("this email already exits!");
      return;
    }
    this.email = newEmail;
  }
  private deleteEmail(): void {
    console.log(this.email);
  }
}

// * Class Inheritance;
class subUser extends Users {
  isFamily: boolean = true;
  changeCourseCount(newCourseCount: number){
    this.courseCount = newCourseCount;
  }
}


const Ismoil = new Users("Ismoil", "ismoil@gmail.com", 125);

// Ismoil.deleteEmail();