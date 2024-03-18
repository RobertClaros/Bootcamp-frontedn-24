function findUniqueElement(arr) {
    let result = 0;
    for (let num of arr) {
        result ^= num;
    }
    return result;
}

let arr = [1, 2, 4, 7, 2, 4, 1];
console.log(findUniqueElement(arr)); 




