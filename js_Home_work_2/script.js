//task1
/*let a = +prompt('Введите число');
let b = 1;
for (let i = 0;i < a;i++){
  b = b * Math.floor(a % 10);
  a /= 10;
}
alert(b);*/

//task 2
/*let a = +prompt('Введите число');
let b = +prompt('Введите число');
let c;
if(a > b){
    c = a;
    a = b;
    b = c;
}
for (let i = a; i <= b; i++){
    console.log(i);
}*/

//task4
/*console.log(navigator.appName);
console.log(navigator.appCodeName);
console.log(navigator.appVersion);
console.log(navigator.platform);*/

//task5 
/*let a = +prompt('Введите число');
b = 1;
for(let i = 2;i<=a;i++){
  b*=i;
}
alert('Ответ: ' + b);*/

//task 6 
/*let a = +prompt('Введите минимум');
let b = +prompt('Введите максимум');
let c = +prompt('Введите шаг');
let d;
if(a > b){
    d = a;
    a = b;
    b = d;
}
for(let i = a; i <= b; i += c){
    console.log(i);
}*/

//task 7 Фибоначчи
/*let a = prompt('Введите число');
let b = 0;
let c = 1;
let d;
for(let i = 1;i <= a;i++){
    d = b + c;
    b = c;
    c = d;
    console.log(c);
} */