
// || FUNCTIONS:

// * If function paramter has default value then it is optional to pass argument for it or not!
function calculateTax(income: number, textYear = 2000, isPaid = false): number {
  if (textYear < 2023 && isPaid)
  return income*1.5;
  else return income*2;
}

calculateTax(50_000);


// * 'Never' means this function never returns any value!
function handleError(erMsg: string):never {
  throw new Error(erMsg);
}

// * When a function returns any type of object;
function getUserData():{} {
  return {name: "Sorbon", id: 12345};
}
// * When a function returns specified type of object;
function getUserInfo():{name: string, isMarried: boolean} {
  return {name: "Sorbon", isMarried: true};
}

type User = {
  name: string;
  isMarried: boolean;
  works: number;
  //using '?' makes it optional!
  hasCar?: boolean;
}

// * Passing object directly does not work, so you can use 'type' aliase instead!
function getUserinformation(user: User/* {name: string, isMarried: boolean, works: number} */):void{
  console.log(`${user.name} is married and he does not work anywhere!`);
}

getUserinformation({name: "Ismoil", isMarried: true, works: 0});
