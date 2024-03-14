let arr2 = ['3', 'c', 'c', 'a', '2', '3', 'c', '3', 'c', '2', '4', '9'];
let frequency = {};

for (let item of arr2){
    frequency[item] = (frequency[item] || 0)+1;
}

let leastFreqItem;
let leastFreqItemCount = Infinity;

for(let item in frequency){
    if(frequency[item] < leastFreqItemCount){
        leastFreqItem = item;
        leastFreqItemCount = frequency[item];
}
}
console.log(leastFreqItem);

//Functional 
const arr = ['3', 'c', 'c', 'a', '2', '3', 'c', '3', 'c', '2', '4', '9'];

const frequencyMap = arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {});

const leastFrequentItem = Object.keys(frequencyMap).reduce((leastFreqItem, item) => {
    if (frequencyMap[item] < frequencyMap[leastFreqItem]) {
        return item;
    } else {
        return leastFreqItem;
    }
}, Object.keys(frequencyMap)[0]);

console.log(leastFrequentItem);
