let arr = [10, 20, 30, 40];
let max = Math.max(...arr);
let second = Math.max(...arr.filter(n => n !== max));
console.log("2nd largest:", second);