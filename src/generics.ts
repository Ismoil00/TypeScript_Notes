// || GENERICS:
// * This generic declaration returns the same data-type which it accepted as an argument!
function identity<Type>(val: Type): Type{
  return val;
}

identity(false);
identity("false");
identity(0);

// _______________________________________________________________________
// Interface Generic Declaration:
interface Car {
  brand: string,
  speed: number,
}

function carShow<Car>(carObject:Car):Car {
  return carObject;
}

// _______________________________________________________________________
// Accepting Array and returning one of its value:
function arrayFunc<T>(product: T[]): T {
  //doing some database operation;
  return product[0];
}

//Accepting and returning an Array:
const arrayFunct = <T>(product: T[]): T[] => {
  //doing some database operation;
  return product;
}

// _______________________________________________________________________
// Generics in case of Objects:
function genericFunc<T, U>(name:T, age:U):Object{
  return {
    name: name,
    age: age,
  }
}

genericFunc("Ismoil", 25);

// Yes, we can make generic declarations specific as well:
function genericFunct<T, U extends number>(name:T, age:U):Object{
  return {
    name: name,
    age: age,
  }
}

genericFunct("Ismoil", /* "25" */ 25);