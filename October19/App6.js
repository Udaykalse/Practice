let a1 = [3, 1], a2 = [4, 2];

let merged = [...a1, ...a2].sort((a, b) => a - b);
console.log(merged);