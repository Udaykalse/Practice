let arr = [10, 5, 20, 15,50];
let second = [...new Set(arr)].sort((a, b) => b - a)[1];
console.log(second);