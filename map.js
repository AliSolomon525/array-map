//Mapping through an Array of Numbers

let numberArray = [1, 4, 5, 2, 1, 5, 7];

// using .map() multiply each number by 3
let newNumberArray = numberArray.map(multiply);
function multiply(number) {
  return (number * 3)
};

console.log(newNumberArray);
// convert this to an arrow function but multiply by 4

let newNumberArray2 = numberArray.map((number) => (number * 4));

console.log(newNumberArray2);
//maping over objects

let objectArray = [
  { dogname: "rover", age: 8 },
  { dogname: "lady", age: 3 },
];
// FORMULA FOR DOG AGE: (dogAge - 2) * 4 + 21;
function convertDogYears(dogAge) {
  return(dogAge - 2) * 4 + 21
}

console.log(convertDogYears(12));

objectArray.map(sentenceCreator)
function sentenceCreator(doginfo){
  console.log(convertDogYears(doginfo.age));
}
