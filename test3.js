const numbers = [1, 4, 5, 1, 2, 10, 12, 15, 11, 13 ,11 ,5]; 

let filter = numbers.filter(function(item) { return (item % 2 == 1); });
let sum = filter.reduce((a,b) => {return a + b;}, 0)

console.log(sum);