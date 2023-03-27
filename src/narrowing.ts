// || NARROWING:
// 'in' - keyword helps to look through object keys:
interface user {
  name: string,
  email: string,
}

interface admin {
  name: string,
  email: string,
  isAdmin: boolean,
}

function isAdminAccount(account: user | admin){
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
  return "This is not Admin Account";
}

//___________________________________________________________________________
// 'instanceof' - keyword is like 'in'-keyword but it is usually used when 'new'-keyword is used to create data-type;
new Date();

function instanceofFunc(argument: Date | string) {
  if (argument instanceof Date) {
    return new Date().getFullYear();
  }
  return "pass valid argument to get Date data-type!";
}

//___________________________________________________________________________
// 'as' - keyword is more complicated for me right now!!!!!!!!!!!!!!!!!!!!!!!
type Fish = {swim: () => void};
type Bird = {fly: () => void};

const isFish = (pet: Fish | Bird): pet is Fish => {
  return (pet as Fish).swim !== undefined
}

const fishFood = (pet: Fish | Bird) => {
  if (isFish(pet)){
    pet;
    return "This is fish food";
  } else {
    pet;
    return "This is bird food";
  }
}


//___________________________________________________________________________
interface Circle {
  kind: "circle",
  radius: number,
}

interface Square {
  kind: "square",
  side: number,
}

interface Rectangle {
  kind: "rectangle",
  width: number,
  length: number,
}

interface Triangle {
  kind: "triangle",
  height: number,
}

type Shape = Circle | Square  | Rectangle /* | Triangle */;

// 'Discriminated Union' - approach does not let us know that a new declaration was taken into consideration;
function getFullArea(figure: Shape) {
  if (figure.kind === "circle"){
    return Math.PI * Math.pow(figure.radius, 2);
  } else if (figure.kind === "square") {
    return figure.side * figure.side;
  } else if (figure.kind === "rectangle") {
    return figure.width * figure.length;
  }
}

// 'Exhaustiveness Checking with never' approach gives us warning in case of new declaration is taken into consideration:
function getArea(figure: Shape) {
  switch(figure.kind) {
    case "circle":
      return Math.PI * Math.pow(figure.radius, 2);
    case "square":
      return figure.side * figure.side;
    case "rectangle":
      return figure.width * figure.length;
    default:
      const _figureDefaultValue: never = figure;
      return _figureDefaultValue;
  }
}