// 2. Напишите функцию подсчета градусов Фаренгейта при входящем параметре температуры в цельсиях.
// Алгоритм пересчета из градусов Цельсия в градусы Фаренгейта - это температура в градусах Цельсия, умноженная на 9/5 плюс 32.

var cels = +prompt('please enter a temperature');

// function getFar(temp) {
//     return temp * 9 / 5 + 32;
// }

const getFar = temp => temp * 9 / 5 + 32;

console.log(getFar(cels));