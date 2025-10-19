let arr=[1,2,4,5];
let n=arr.length+1;
let total=(n*(n+1))/2;
let sum=arr.reduce((a,b)=>a+b);
console.log(total-sum);