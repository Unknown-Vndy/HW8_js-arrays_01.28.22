'use strict'
const arrayOfNumbers = [];
for (let i = 0; i < 10; i++){
   arrayOfNumbers.push(Math.trunc(Math.random() * 10));
}
const clonedArrayOfnumbers = cloneArray(arrayOfNumbers);//for task 8
console.log(`main array ${arrayOfNumbers}`)
arrayOfNumbers.pop();
arrayOfNumbers.unshift(0);
arrayOfNumbers.push(0);
console.log(`main array ${arrayOfNumbers}`)
console.log(`main array length is ${arrayOfNumbers.length}`);


console.log(`Numbers with even index ${showNumbersWithEvenIndex(arrayOfNumbers)}`);

console.log(`Even numbers ${showEvenNumbers(arrayOfNumbers)}`);

console.log(`Indexes Of Zero Numbers ${showIndexesOfZeroNumbers(arrayOfNumbers)}`);

console.log(`Amount of zero in array is ${countZeroNumbers(arrayOfNumbers)}`);

console.log(`main array ${arrayOfNumbers}`)
arrayOfNumbers.filter((number, index, arr) => {
   if (number === 0) arr.splice(index, 1);
});
console.log(`main array without 0: ${arrayOfNumbers}`);


console.log(`initial array ${clonedArrayOfnumbers}`);
const numbersPower2 = [];
clonedArrayOfnumbers.forEach(number => numbersPower2.push(number * number));
console.log(`Array number power 2: ${numbersPower2}`);



if (checkAllNumbersIfTheyAreEven(numbersPower2)) {
   console.log(`every number in ${numbersPower2} is even`);
} else {
   console.log(`${numbersPower2} isn't the array of even numbers`);
}



if (isPrimeArray(numbersPower2)) {
   console.log(`every number in ${numbersPower2} is prime`);
} else {
   console.log(`${numbersPower2} isn't the array of prime numbers`);
}


if (checkArrayForNegativeNumbers(numbersPower2)) {
   console.log(`${numbersPower2} has negative numbers`);
} else {
   console.log(`${numbersPower2} has no negative numbers`)
}




console.log(`initial array ${clonedArrayOfnumbers}`);
console.log(`initial array cube ${cubeNumbers(clonedArrayOfnumbers)}`);



function MyArray() {
   this.length = 0;
}

MyArray.prototype = {
   push: function (item) {
      this[this.length] = item;
      return this.length++;
   },

   pop: function () {
      if (this.length === 0) { return }
      const deletedElement = this[this.length - 1];
      delete this[this.length - 1];
      this.length--;
      return deletedElement;
   },

   shift: function () {
      if (this.length <= 0) { return }
      const deletedElement = this[0];
      for (let i = 0; i < this.length ; i++){
         this[i] = this[i + 1];
      }
      this.length--;
      delete this[this.length];
      return deletedElement;
   },
}

const arr1 = new MyArray();

arr1.push(1);
arr1.push(2);
arr1.push(3);
arr1.pop();
arr1.shift();
console.log(arr1);






function cloneArray(arr) {
   const clone = [];
   for (let i = 0; i < arr.length; i++){
      clone[i] = arr[i];
   }
   return clone;
}



function showNumbersWithEvenIndex(arr) {
   const NumbersWithEvenIndex = [];
   for (let i = 0; i < arr.length; i += 2){
      NumbersWithEvenIndex.push(arr[i]);
   }
   return NumbersWithEvenIndex;
}

function showEvenNumbers(arr) {
   const evenNumbers = [];
   for (let i = 0; i < arr.length; i++){
      if (arr[i] % 2 === 0) evenNumbers.push(arr[i]);
   }
   return evenNumbers;
}

function showIndexesOfZeroNumbers(arr) {
   const IndexesOfZeroNumbers = [];
   for (let i = 0; i < arr.length; i++){
      if (arr[i]===0) {
         IndexesOfZeroNumbers.push(i);
      }
   }
   return IndexesOfZeroNumbers;
}

function countZeroNumbers(arr) {
   let counterZero = 0;
   for (let i = 0; i < arr.length; i++){
      if (arr[i] === 0) counterZero++;
   }
   return counterZero;
}


function checkAllNumbersIfTheyAreEven(arr) {
   return arr.every(number => number % 2 === 0)
}



function isPrimeArray(arr) {
   return arr.every(number => {
      if (number <= 1) {
         return false;
      }
      for (let i = 2; i < number / 2; i++) {
         if (number % i === 0) {
            return false;
         }
      }
      return true;
   })
}


function isPrimeNumber(number) {
   if (number <= 1) {
      return false;
   }
   for (let i = 2; i < number/2; i++){
      if (number % i === 0) {
         return false;
      }
   }
   return true;
}


function checkArrayForNegativeNumbers(arr) {
   return arr.some(number => number < 0)
}


function cubeNumbers(arr) {
   return arr.map(number => Math.pow(number, 3));
}