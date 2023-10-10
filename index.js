/*
Hey Aaron and Epifania!
Good work here! Just out the comments, I left for you in the code and at the end for final thought. 
*/

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
  console.log(num1 * num2); // please read the directions and fix. 
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
// The logic here does not work. Your last return does not add up to the value expected to return. Check the instructions to see how you can fix this. 
//console.log(add(2, 6));

//7
const isNegative = (num) => {
  if (Math.sign(num) === -1 || Math.sign(num) === 0) {
    return true;
  } else {
    return false;
  }
};
// I would love to see how you would refactor this so you don't return booleans
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
// I would love to see how you would refactor this so you don't return booleans
//console.log(betweenTwentyAndFourty(99));

//10
const largest = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
};
// Look at how you could use the Math.max method here.
console.log(largest(3, 6, 44));


/*
I would like to address the add and multiply functions. They do not have the expected outputs. Please re-read the instructions and resubmit them.
Overall your code is clean and you have a solid understanding of the logic I gave you some feedback on how you can elevate some of your solutions.
Good work and keep it up. 
*/
