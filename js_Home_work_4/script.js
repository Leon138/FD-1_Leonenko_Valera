//task1
/*let arr = [15,45,33,29,54,91,75,62];
let min = arr[0]; let minIndex = 0;
let max = arr[0]; let maxIndex = 0;

for(let i = 0;i < arr.length;i++){
    if (arr[i] < min){
        min = arr[i];
        minIndex =i;
    } else if (arr[i] > max){
        max = arr[i];
        maxIndex = i;
    }    
}
arr[minIndex] = max;
arr[maxIndex] = min;

console.log(min);
console.log(max);
console.log(arr);*/

//task3
/*let arr = [5,3,7,4,9,5,4,3];
let newarr = Array.from(new Set(arr));
console.log(newarr);*/

//task4
/*let arr  = [1,2,10,58,100,95,54,87];
let max = 0; let maxIndex = 0;
for (let i = 0;i < arr.length;i+=2){
    if(arr[i] > max){
        max = arr[i];
        maxIndex = i;
    }
}
console.log(max);
console.log(maxIndex);*/

//task5
/*let arr  = [4,2,10,58,60,70,20,22];
let sum  = 0;
let min = arr[0];  let minIndex = 0;
let max = arr[0];  let maxIndex = 0;
for (let i = 0;i < arr.length;i++){
    if (arr[i] < min){
        min = arr[i];
        minIndex = i;
    } else if (arr[i] > max){
        max = arr[i];
        maxIndex = i;
    } 
}
if (minIndex < maxIndex){
    for (let i = minIndex + 1;i < maxIndex;i++){
        sum += arr[i];
    }
}
console.log(min);
console.log(max);
console.log(minIndex);
console.log(maxIndex);
console.log('Сумма элементов : '  + sum);*/

//task7 
/*let arr  = [2,4,6,1,3];
let newarr = [];
let a = 0;
for (let i = 0;i < arr.length;i++){
    a += arr[i] / arr.length;
}
for (let i = 0;i < arr.length;i++){
    if (arr[i] < a) {
        newarr.push(arr[i]); 
    }
}
console.log(a);
console.log(newarr);*/

//task8
/*let arr  = [1,2,3,4,5];
let newarr = [];
console.log(newarr=arr.reverse());*/

//task9 
/*let arr = [4, -5, 2,- 4, -2, 2, -1, 5];
let newarr = [];
let newarr_1 = [];
let newarr_2 = [];
for (let i = 0;i < arr.length;i++){
    if (arr[i] < 0){
        newarr.push(arr[i]); 
    }else if (arr[i]>0){
        newarr_1.push(arr[i]);
    }
}

let result = [...newarr,...newarr_1];

newarr_2.push(newarr_1 + newarr);
console.log(newarr);
console.log(newarr_1);
console.log(newarr_2);*/