const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
// 1
if (randomNumber > 0.7) {
  alert('The random number is greater than 0.7!');
}
// 2
const numArr = [1,2,3,4,5,6];
for (let i = 0; i < numArr.length; i++){
  console.log(numArr[i]);
}
for (const elem of numArr){
  console.log(`${elem}`)
}
// 3
for (let i = numArr.length -1; i >= 0 ; i--){
  console.log(numArr[i]);
}
// 4
const randomNumber2 = Math.random();
const bothHigh = randomNumber > 0.7 && randomNumber2 > 0.7;
const oneLow = randomNumber < 0.2 || randomNumber2 < 0.2;

if (bothHigh || oneLow) {
  alert('chupalo!');
}