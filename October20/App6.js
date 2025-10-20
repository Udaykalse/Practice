let n=1254,sum=0;
while(n>0){
    sum+=n%10;
    n=Math.floor(n/10);
};
console.log(sum);