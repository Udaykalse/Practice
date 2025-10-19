// let arr = [1, 2, 3, 2, 4, 1];
// let dup = arr.filter((itm, i) => arr.indexOf(itm) !== i);
// console.log([...new Set(dup)]);

let arr = [1, 2, 3, 2, 4, 1];
let dup = arr.filter((item, i) => arr.indexOf(item) !== i);
console.log([...new Set(dup)]);
