debugger;//позволяет остановить выполнение программы

function myFunc(){
    //локальная зона видимости
    //+ссылка на глобальную
    var localVar='hello';
    var anotherLocalVar=2017;
}

//глобальная зона видимости
var globalVar=1000;
myFunc();
 
