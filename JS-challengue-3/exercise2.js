function findUniqueElement(arr) {
    return arr.reduce((acc, curr) => acc ^ curr, 0);
}

let arr = [1, 2, 4, 7, 2, 4, 1];
console.log(findUniqueElement(arr)); 