let arr = [1, 2, 3, 2, 1];
let count = {};
arr.forEach(num => count[num] = (count[num] || 0) + 1);
console.log(count);