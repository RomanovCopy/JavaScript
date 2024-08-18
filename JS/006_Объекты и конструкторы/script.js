'use strict'

//функция-конструктор

function User(firstName, lastName){
    this.firstName=firstName;
    this.lastName=lastName;
    this.isAdmin=false;

    //локальная переменная, недоступна за пределами объекта
    var localVar='';
    //локальная функция, недоступна за пределами объекта
    function test(){
        
    }

    this.getFullName=function(){
        console.log(this);
        return  this.firstName+' '+this.lastName;
    }
}

function getName(){
    console.log(this);
};

//создание экземпляров объектов
var user_01=new User('Sergey', 'Romanov');
var user_02=new User('Veronika','Romanova');


console.log(user_01.getFullName());
console.log(user_02.getFullName());
getName();

getName.call(user_01);//вызов в контексте user_01
getName.apply(user_01, ['p1','p2']);//вызов с параметрами в виде массива

console.log(Math.max.apply(Array, [1,3,4,3,25,6,9,74,23]));//контекст 
//может быть любым и даже null

var a={
    name:'foo',
    getName:function(){
        return this.name;
    }
};

var b={
    name:'bar',
    //getName:a.getName
    getName:a.getName.bind(a)//привязка к a
}

a.getName();//foo
b.getName;//bar  без привязки
b.getName;//foo  с привязкой









