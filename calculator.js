console.log("Pound sand");

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function calc(x, y, cb) {
  return cb(x, y);
}

console.log(calc(10, 10, multiply));
