'use strict';


function printHello(){
    console.log('Hello!!!');
}

var myFunc=function(){
    console.log('Hello!!!');
}

function printName(name){
    if(name){
        console.log(name);
    }else{
        alert('Неверный ввод!!!')
    }
}

function printName02(name){
    var name=name || 'User';
    return name;
}

//рекурсия
 function printNumbers(n){
    if(n>0){
        console.log(n);
        printNumbers(n-1);
    }
 }

 