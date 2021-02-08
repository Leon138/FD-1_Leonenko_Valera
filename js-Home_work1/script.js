// task1
/*let a = 10;
let b = 2;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);*/

// task2 задания a)
/*let c = 20;
let d = 15;
let a;
a = c;
c = d;
d = a;
console.log(c);
console.log(d);*/

// task2 задания b)
/*let c = 20;
let d = 15;
c = c + d;
d = c - d;
c = c - d;
console.log(c);
console.log(d);*/

// task3 секундомер 
/*let a = prompt('Введите количество дней');
let b;
b = a * 86400;
alert('Количество секунд:  '+ b + '  в  ' + a + '  днях');*/

// task4 калькулятор 
/*let a = +prompt('Введите число');
let d =  prompt('Тип операции');
let b = +prompt('Введите число');
let c,e,k,l;
c = a + b; 
e = a - b;
k = a * b;
l = a / b;
if(d == '+'){
    alert('Ответ: '+c);
}
if(d == '-'){    
    alert('Ответ: '+e);
}   
if(d == '*'){    
    alert('Ответ: '+k);
} 
if(d == '/'){    
    alert('Ответ: '+l);
}*/

// task5 
/*let a = prompt('Ваше имя?');
if(a == '' || a == ' '){
    alert('Неверное имя');
}
else{
    alert('Hello your name '+a);
}*/

//task6 Проверка числа 
/*let a = +prompt('Введите число');
if(a > 10 && a <20  || a > -20 && a < -10 ){
    alert(a += 100);
}
else{
    alert('Неверно введеное число');
}*/

//task7 
let str = prompt('Введите число');
let b = 1;
for(let i = 0;i < str.length; i++){
    b *= str[i];
}
alert('Ответ: '+b);


//task8 
/*let num = 47;
num += 7;
num -= 18;
num *= 10;
num /= 15;
alert(num);*/

//task9 
/*let num = 10;
num++;
num++;
num--;
alert(num);*/































