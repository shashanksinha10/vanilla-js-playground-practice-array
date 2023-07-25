//const arr = ['apple', 'cherry', 'banana'];

// const arr1 = numbar.map((item, index, array) => {
//   return item*5
// });

// console.log(arr1);
// const numbar = [1, 2, 3, 4, 5, 6];
// const numb = numbar.reduce((prev, item) => {
//   return prev + item;
// }, 0);

// console.log(numb);

// const num1 = [1, 2, 3, 4, 5];
// const num2 = [10, 8, 6, 7, 8, 9, 6, 9];

// const arr = [...num1, ...num2];

// console.log(arr)

// function arrayShort(num2) {
//   const unique = Array.from(new Set(num2));
//   unique.sort((a, b) => {
//     return b - a;
//   });
//   if (unique.length >= 2) {
//     return unique[1];
//   } else {
//     return 'no 2nd largest number found';
//   }
// }

// console.log(arrayShort(num2));

// function secondLargestOptamize(num2) {
//   let largest = Number.NEGATIVE_INFINITY;
//   let SecondLargest = Number.NEGATIVE_INFINITY;
//   for (let i = 0; i < num2.length > 0; i++) {
//     if (num2[i] > largest) {
//       SecondLargest = largest;
//       largest = num2[i];
//     } else if (num2[i] != largest && num2[i] > SecondLargest) {
//       SecondLargest = num2[i];
//     }
//   }
//   return SecondLargest;
// }
// console.log(secondLargestOptamize([10, 8, 6, 7, 8, 9, 6, 19, 22]));

let numb3 = [10, 8, 6, 7, 8, 9, 6, 9];
function removeDuplicates(numb3) {
  for (let i = 0; numb3.length - 1; i++) {
    if (numb3[i] === numb3[i + 1]) {
      numb3.splice(i + 1, 1);
      i--;
    }
  }
  return numb3;
}

console.log(removeDuplicates([10, 8, 6, 7, 8, 9, 6, 9]));
