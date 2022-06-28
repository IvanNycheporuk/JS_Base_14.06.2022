// 6.	Напишите функцию, которая сгенерирует массив рандомных чисел (кол-во элементов в массиве вводит пользователь) 
// от 0 (на дз от -10) до 10
//     Определите наименьшее и наибольшее число в массиве.
//     Массив, минимальное и максимальное число - вывести в консоль.

let userNumber = +prompt('give me a number');

function getSum () {
    let arr = [];

    for (let i = 0; i < userNumber; i++) {
        let randomNum = Math.floor(Math.random() * 10);
        arr.push(randomNum);
    }

    console.log(arr.length);

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    // will not work with let
    // console.log('value of i: ' + i);

    return sum;
}

console.log(getSum());