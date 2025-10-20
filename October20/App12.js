let str="Hello WOrld";
function voCount(str){
    let count=str.match(/[aeiou]/gi).length;
    return count;
}
console.log(voCount(str));