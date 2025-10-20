let a = "listen", b = "silent";
function isAnagram(a, b) {
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');

    return str1 === str2;
};
console.log( isAnagram(a,b))