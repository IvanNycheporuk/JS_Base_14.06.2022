// 9. При помощи цикла for выведите чётные числа от 2 до 10.

// for (let i = 0; i < 10; i+=2) {
//     console.log(i);
// }

for (let i = 1; i < 10; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}
console.log('#############');

for (let i = 1; i < 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }

    console.log(i);
}