 
var numbers = [1,3,4,3,2,3,0,10,30,30,7];

var sort = numbers.sort(function (a, b) {
    return a - b;
});

console.log(sort);