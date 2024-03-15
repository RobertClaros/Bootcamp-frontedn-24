let arr1 =[12, 6, 10,2 ,45 ,100];
let smallest = arr1[0]; 

for (let i = 1; i < arr1.length; i++){
    if(arr1[i] < smallest){
        smallest = arr1[i];
    }
}
console.log(smallest);

//Functional 
let arr2 = [12, 6, 10, 2, 45, 100];
let smallest2 = arr2.reduce((acc, cur) => cur < acc ? cur : acc, arr2[0]);
console.log(smallest2);