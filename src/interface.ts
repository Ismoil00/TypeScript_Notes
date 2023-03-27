// ||  INTERFACES:
// * The differences between Tuples and Interfaces: 1) You can reopen or add something to interfaces later; 2) Inheritance with 'extend'-word;
interface Visitor {
  readonly dbId: number,
  email: string,
  userId: number,
  googleId?: string,
  // startTrail: () => string,
  startTrail(): string,
}

// * Reopening:
interface Visitor {
  isActive: boolean,
}

// * Inheritance:
interface Viewer extends Visitor {
  location: string,
  role: "freelancer" | "buyer" | "simple visitor",
}

const ismoilVisitor: Visitor = {
  dbId: 19988991,
  email: "ismoil@gmail.com",
  userId: 112233,
  startTrail: () => {
    return "fuck this life!"
  },
  isActive: false,
}

// **********************************************************************************
interface TakePhoto {
  cameraMode: string
  filter: string
  burst: number
}

interface Story {
  createStory(): void
}

// * When a class implements any interface - then it should implement all of its properties/variables as well and ofcourse you can add more on top of interfaces' properties!
/* class Instagram implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public shorts: string,
  ){}
  createStory(): void {
    console.log("a story was created!");
  }
} */