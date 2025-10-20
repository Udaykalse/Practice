let arr = [10, 5, 8, 20, 15];
let second=[...new Set(arr)].sort((a,b)=>b-a)[1];
console.log("2nd Largest:-", second);


