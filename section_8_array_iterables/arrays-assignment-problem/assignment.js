const array = [1, 2, 3, 4, 5, 6];
const numsGrater5 = array.filter((val) => val > 5);
console.log(numsGrater5);

const mappedNumbers = array.map((val) => ({ num: val }));
console.log(mappedNumbers);

const mutiplication = array.reduce(
  (curResult, curValue) => curResult * curValue,
  1,
);
console.log(mutiplication);

function findMax(...array) {
  let curMax = array[0];
  for (const num of array) {
    if (num > curMax) {
      curMax = num;
    }
  }
  return curMax;
}
console.log(findMax(...array));

function findMinMax(...array) {
  let curMax = array[0];
  let curMin = array[0];
  for (const num of array) {
    if (num > curMax) {
      curMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }
  return [curMin, curMax];
}
const [min, max] = findMinMax(...array);
console.log(min, max);

const userIds = new Set();
userIds.add(10);
userIds.add(-5);
userIds.add(-5);
console.log(userIds);
