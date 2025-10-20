let arr = [10, 5, 8, 20, 15];
let first = -Infinity, second = -Infinity;

for (let num of arr) {
    if (num > first) {
        second = first;
        first = num;
    } else if (num > second && num < first) {
        second = num;
    };
};
console.log("2nd largest:", second);