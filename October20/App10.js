function factNum(num){
    if(num===0 || num===1) return 1;
    return num*factNum(num-1);
};

console.log(factNum(5))