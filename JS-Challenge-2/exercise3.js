let arr2 = [7, 9, 1, 'a', 'a', 'f', 9, 4, 2, 'd', 'd'];

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

let uniqueArr = removeDuplicates(arr2);
console.log(uniqueArr);