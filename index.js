//Code your solutions in this file
//1
const fiveToOneHundred = () => {
  for (let i = 5; i <= 100; i++) {
    console.log(i);
  }
};
//console.log(fiveToOneHundred());

//2
const multiplesOfThree = () => {
  for (let i = 3; i <= 100; i += 3) {
    console.log(i);
  }
};

//console.log(multiplesOfThree());

//3
const multiplesOfThreeOrFive = () => {
  for (let i = 3; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      console.log(i);
    }
  }
};
//console.log(multiplesOfThreeOrFive());

//4
const untilNum = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
};

//console.log(untilNum(10));

//5
const multiply = (num1, num2) => {
  console.log(num1 * num2);
};
// console.log(multiply(3, 7.5));

//6
const add = (num1, num2) => {
  if (num1 != num2) {
    return num1 + num2;
  } else if (num1 == num2) {
    return num1 * 3;
  }
};

//console.log(add(2, 6));

//7
const isNegative = (num) => {
  if (Math.sign(num) === -1 || Math.sign(num) === 0) {
    return true;
  } else {
    return false;
  }
};
//console.log(isNegative(-3));

//8
const triangleArea = (base, height) => {
  return (base * height) / 2;
};

//console.log(triangleArea(6, 4));

//9
const betweenTwentyAndFourty = (num) => {
  if (num > 4 && num < 40) {
    return true;
  } else {
    return false;
  }
};

console.log(betweenTwentyAndFourty(99));
