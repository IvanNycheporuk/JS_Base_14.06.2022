// 3. Напишите функцию которая бы переворачивала предоставленную строку
// Возможно, вам придется превратить строку в массив, прежде чем вы можете обратить его. 
// Ваш результат должен быть строкой.
// "something"

// "test" => "tset"

var testParam = 'something';

// function reverseString(str) {
//     // Array.split
//     let arr = str.split('');
//     let arrReverse = arr.reverse();
//     let result = arrReverse.join('');

//     return result;
// }

const reverseString = (str) => str.split('').reverse().join('');

console.log(reverseString(testParam));