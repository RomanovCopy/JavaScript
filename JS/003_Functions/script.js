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
    console.log(name);
}

