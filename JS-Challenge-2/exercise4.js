let data = [['the', 'little', 'horse'], ['plane', 'over', 'the', 'ocean'], ['chocolate', 'ice', 'cream', 'is', 'awesome'], ['this', 'is', 'a', 'long', 'sentence']];

function concatArrays(arr) {
    return arr.map(subArr => subArr.join(' '));
}

let concatenated = concatArrays(data);
console.log(concatenated);