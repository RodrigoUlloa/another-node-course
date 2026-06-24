function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 5));
console.log(add(12, 15));

function addRandom(num1) {
  return num1 + Math.random();
}
console.log(addRandom(5));

let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previoesResult = sum;
  return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ["Sports", "Cooking"];

function printHobbies(h) {
  h.push("NEW HOBBY");
  console.log(h);
}
printHobbies(hobbies);

function createCalcualtor(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }
  return calculateTax;
}

function calculateTax(amount, tax) {
  return amount * tax;
}

const calculateVatAmount = createCalcualtor(0.19);
const calculateIncomeTaxAmount = createCalcualtor(0.25);

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));
