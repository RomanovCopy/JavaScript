function showARGS(){
    //преобразование arguments в Array
    var args=Array.prototype.slice.call(arguments);
    //или
    var args1=[].slice.call(arguments);
    //или
    var args2=Array.from(arguments);
    //или
    var args3=[...arguments];
    //slice - создает копию элементов argumments и помещает  их
    //в новый (args) массив
    console.log(arguments[0], arguments[1]);
    console.log(args.join(', '));
    console.log(args1.join(', '));
    console.log(args2.join(', '));
    console.log(args3.join(', '));
}

showARGS('Hellow', 'World');