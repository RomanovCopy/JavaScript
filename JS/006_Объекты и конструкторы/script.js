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
        return  this.firstName+' '+this.lastName;
    }
}

//создание экземпляров объектов
var user_01=new User('Sergey', 'Romanov');
var user_02=new User('Veronika','Romanova');

console.log(user_01.getFullName());
console.log(user_02.getFullName());


 
