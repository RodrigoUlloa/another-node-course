// const numbers = [1, 2, 3];
// console.log(numbers);

// const moreNumbers = Array(5);
// console.log(moreNumbers);
//
// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

// const listItem = document.querySelectorAll("li");
// console.log(listItem);
//
// const moreNumbers = Array.from(listItem);
// console.log(moreNumbers);
//
// const hobbies = ["Cocking", "Sports"];
// const personalData = [30, "Max", { moreDetail: [] }];
//
// const analyticsData = [
//   [1, 1.6],
//   [-5.4, 2.1],
// ];
//
// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }
//
// console.log(personalData[1]);

const hobbies = ["Sports", "Cooking"];
hobbies.push("reading");
hobbies.unshift("Coding");
const poppedValue = hobbies.pop();
hobbies.shift();
console.log(hobbies);

hobbies[1] = "Codign";
hobbies[5] = "Reading";
console.log(hobbies);

hobbies.splice(0, 0, "Good Food");
console.log(hobbies);

const removedElements = hobbies.splice(-2, 1);
console.log(hobbies);
