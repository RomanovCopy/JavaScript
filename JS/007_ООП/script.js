 'use strict'
 function User(firstName, lastName){

    this.firstName=firstName;
    this.lastName=lastName;
    
    // this.getFullName=function(){
    //     return this.firstName + ' ' + this.lastName;
    // }
 }

 User.prototype.getFullName=function(){
    return this.firstName + ' ' + this.lastName;
};


 function Manager(firstName, lastName){
    console.log(arguments);//Arguments(2) ['Kristina', 'Romanova']
    User.apply(this, arguments);//наследование от 
    //User выполняя функцию-конструктор в текущем контексте

    //собственная функция
    this.sayHello=function(){
        alert('Чем могу помочь?');
    }

    this.changeName=function(name){
        this.firstName=name;
    }
 }

 var user_01=new User('Sergey', 'Romanov');
 var manager_01=new Manager('Kristina', 'Romanova');


