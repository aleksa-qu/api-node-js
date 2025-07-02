//Part 1
//Arrays
//Task 1
const arrayNumbers = [5, 6, 7];
console.log(arrayNumbers);
console.log(arrayNumbers.length);

//Task 2
const arrayTwoStrings =['Test', 'User'];
arrayTwoStrings.push('!');
console.log(arrayTwoStrings);
console.log(arrayTwoStrings.length);

//Task 3
const arrayThreeStringsArray = ['Test', 'User', 'Password'];
arrayThreeStringsArray.pop();
console.log(arrayThreeStringsArray);
console.log(arrayThreeStringsArray.length);

//Task 4
const arrayEmptyNumbers: Array<number> = [];
arrayEmptyNumbers.push(3);
console.log(arrayEmptyNumbers.length);

arrayEmptyNumbers.push(6);
console.log(arrayEmptyNumbers.length);

//Loops
//Task 1
const arrayFiveNumbers: Array<number> = [0, 1, 2, 3, 4];
for (let i = 0; i < arrayFiveNumbers.length; i++) {
    console.log(arrayFiveNumbers[i]);
}

//Task 2
const arrayFiveNumbersSum: Array<number> = [0, 1, 2, 3, 4];
let sumOfArray = 0;
for (let i = 0; i < arrayFiveNumbersSum.length; i++) {
    sumOfArray += arrayFiveNumbersSum[i];
}
console.log('sum of array:', sumOfArray);

//Task 3
const arrayThreeNumbers: Array<number> = [5, 6, 7];
const arrayNumbersMultipliedByTwo: Array<number> = [];

for (let i = 0; i < arrayThreeNumbers.length; i++) {
    arrayNumbersMultipliedByTwo.push(arrayThreeNumbers[i] * 2);
}
console.log(arrayNumbersMultipliedByTwo);

//Task 4
const arrayNumbersReverse: Array<number> = [5, 6, 7];
for (let i = arrayNumbersReverse.length - 1; i >= 0; i--) {
    console.log(arrayNumbersReverse[i]);
}

//Part 2
//Task 1
const arrayMaxNumbers: Array<number> = [25, 36, 42, 16, 7];
let maxNumber: number = arrayMaxNumbers[0];
for (let i = 1; i < arrayMaxNumbers.length; i++) {
    if (arrayMaxNumbers[i] > maxNumber) {
        maxNumber = arrayMaxNumbers[i];
    }
}
console.log('maximum number of array:', maxNumber);

//Task 2
const arrayMinNumbers: Array<number> = [25, 36, 42, 16, 7];
let minNumber: number = arrayMinNumbers[0];
for (let i = 1; i < arrayMinNumbers.length; i++) {
    if (arrayMinNumbers[i] < minNumber) {
        minNumber = arrayMinNumbers[i];
    }
}
console.log('minimum number of array:', minNumber);

//Task 3
const arrayEvenCountNumbers: Array<number> = [25, 36, 42, 16, 7, 59, 76];
let evenCount: number = 0;
for (let i =0; i < arrayEvenCountNumbers.length; i++) {
    if (arrayEvenCountNumbers[i] % 2 === 0) {
        evenCount++;
    }
}
console.log('numbers of even count', evenCount);

//Task 4
const arrayPositiveNumbers: Array<number> = [-25, 36, -42, 16, 7, -59, 76];
let  positiveNumbers: number[] = [];
for (let i = 0; i < arrayPositiveNumbers.length; i++) {
    if (arrayPositiveNumbers[i] > 0) {
        positiveNumbers.push(arrayPositiveNumbers[i]);
    }
}
console.log('positive numbers of array:', positiveNumbers);