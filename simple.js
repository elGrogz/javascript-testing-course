import * as math from "./math";

// const sum = (a, b) => a + b;
// const subtract = (a, b) => a - b;

let result = math.sum(3, 7);
let expected = 10;

if (result !== expected) {
  throw new Error(`${result} doesn't equal ${expected}`);
}

result = math.subtract(10, 4);
expected = 5;

if (result !== expected) {
  throw new Error(`${result} doesn't equal ${expected}`);
}
