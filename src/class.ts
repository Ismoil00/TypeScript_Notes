// || CLASS ||
// |> Hardway of writing a class:
class OldUser {
  public readonly name: string;
  private email: string;
  protected age: number;
  public status: string = "married";
  constructor(ism: string, gmail: string, howOld: number) {
    this.name = ism;
    this.email = gmail;
    this.age = howOld;
  }
}

// ------------------------------------------------------------------
// |> Less-code way of writing a class:
class Users {
  protected courseCount: number = 5;
  constructor(
    public readonly name: string,
    public email: string,
    private userID: string | number = 1000
  ) {}
  public get getEmail(): string {
    return `this is the ${this.email}`;
  }
  public set setEmail(newEmail: string) {
    // * In TS setters do not accept any 'return declaration'!
    if (this.email === newEmail) {
      throw new Error("this email already exits!");
    }
    this.email = newEmail;
  }
  private deleteEmail(): void {
    console.log(this.email);
  }
  protected simpleFunc(): string {
    return "this is simple public function";
  }
}

class subUser extends Users {
  isFamily: boolean = true;
  constructor(name: string, email: string, public Class: string[]) {
    super(name, email);
    this.Class = Class;
  }
}

const Ismoil = new Users("Ismoil", "ismoil@gmail.com");
const Sorbon = new Users("Ismoil", "ismoil@gmail.com", 55510);
const Umed = new subUser("Umed", "umed@gmail.com", ["math", "geometry"]);
Umed.getEmail;
Umed.simpleFunc();

// ------------------------------------------------------------------
// |> Class and Interface:

interface Player {
  name: string;
  sportType: string;
  train(hours: number): number;
}

class FootballPlayer implements Player {
  name: string;
  sportType: string;
  constructor(val: string, type: string) {
    this.name = val;
    this.sportType = type;
  }
  train(hours: number): number {
    return hours;
  }
}

// ------------------------------------------------------------------
// |> Class Statis Declaration

class Peeps {
  // * static declaration applies directly to the class but not to any specific object!
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor() {
    this.id = ++Peeps.count;
  }
}

// ------------------------------------------------------------------
// |> GET and SET Methods:

class Brand {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    }
    throw new Error("Passed value is not an array of strings!");
  }
}

const newBrand = new Brand();
// SETTER
newBrand.data = ["ismoil", "suhrob", "somon"];
// GETTER
console.log(newBrand.data);
