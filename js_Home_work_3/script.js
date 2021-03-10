// task1
/*let even = 0;
let odd = 0;
for (let i = 0;i < 100;i++){
  let random = Math.floor(Math.random()*1000);
    if (random % 2 == 0){
      even++;
   }else{
       odd++;
   }
}
console.log('Количество четных: ' + even);
console.log('Количество нечетных: ' + odd);*/

//task2
/*let random = Math.floor(Math.random()*100);
// console.log(random);
for (let i = 0;i < 10;i++){
    let a = +prompt('Введите число');
    if (random < a){
        alert('Число меньше');
    }else if (random > a){
        alert('Число больше');
    }
    if (a == random){
        alert('you win');
        break;
    }
}
console.log('Number: ' + random);*/

//task3
/*let num = prompt();
let max = 0;
for(let i = 0;i < num.length;i++){
    if (Number (num[i] > max)){
       max = num[i];
    }
}
console.log(max);*/

//task4
/*let a = prompt();
let text = a.split(' ');
let count = 0;
for (let i = 0;i < text.length;i++){
    if (text[i] != ''){
        count++;
    }
}
console.log(count);*/

//task5
/*let arr = [];
for (let i = 0;i < 10;i++){
    let random = Math.floor(Math.random()*100);
    arr  = random;
    console.log(arr);
}*/

//task6 
/*let a = prompt();
let arr = [];
for (let i = 0;i < a.length;i++){
    arr.push(a[i]);
}
console.log(arr);*/

//task7
/*let arr = [1,4,40,20,90,32,54];
let max = 0;
let index;
for (let i = 0;i < arr.length;i++){
    if (arr[i] > max){
        max = arr[i];
    }
}
console.log(max);
console.log(arr.indexOf(max));*/

//task8
/*let arr = [2,4,7,38,91,52,31];
let newarr = [];
let num  = +prompt('Введичте число');
for (let i = 0;i < arr.length;i++){
    if (arr[i] !== num){
        newarr.push(arr[i]);
    }
}
console.log(newarr);*/