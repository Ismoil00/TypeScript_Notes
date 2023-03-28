// || Assertions:
const addOrcontact = (
  a: number,
  b: number,
  c: "add" | "concat"
): string | number => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let stringReturn: string = addOrcontact(5, 5, "concat") as string;

// with Assertions we are more likely to make mistakes, since TS believes us in such cases!
let numberReturn: number = addOrcontact(5, 5, "concat") as number;

// Assertions and unknown type:
(10 as unknown) as string;

// Assertions and DOM Problems:
const img1 = document.querySelector("img")!
const img2 = document.getElementById("img") as HTMLImageElement

img1.src
img2.src