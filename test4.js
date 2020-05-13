const numbers = [1, 4, 5, 1, 2, 10, 12, 15, 11, 13 ,11 ,5]; 

let unique = numbers.filter((a, b, c) => c.indexOf(a) === b).filter(n => n % 2);
let sum = unique.reduce((a,b) => {return a + b;}, 0)

console.log(sum);