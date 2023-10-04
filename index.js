//Code your solutions in this file
const fiveToOneHundred = () => {
  for (let i = 5; i <= 100; i++) {
    console.log(i);
  }
};
//console.log(fiveToOneHundred());

const multiplesOfThree = () => {
  for (let i = 3; i <= 100; i += 3) {
    console.log(i);
  }
};

//console.log(multiplesOfThree());

const multiplesOfThreeOrFive = () => {
  for (let i = 3; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      console.log(i);
    }
  }
};
//console.log(multiplesOfThreeOrFive());

const untilNum = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
};

//console.log(untilNum(10));

const multiply = (num1, num2) => {
  console.log(num1 * num2);
};
// console.log(multiply(3, 7.5));

const add = (num1, num2) => {
  if (num1 != num2) {
    return num1 + num2;
  } else if (num1 == num2) {
    return num1 * 3;
  }
};

console.log(add(2, 6));
