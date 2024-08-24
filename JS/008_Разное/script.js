// function showARGS(){
//     //преобразование arguments в Array
//     var args=Array.prototype.slice.call(arguments);
//     //или
//     var args1=[].slice.call(arguments);
//     //или
//     var args2=Array.from(arguments);
//     //или
//     var args3=[...arguments];
//     //slice - создает копию элементов argumments и помещает  их
//     //в новый (args) массив
//     console.log(arguments[0], arguments[1]);
//     console.log(args.join(', '));
//     console.log(args1.join(', '));
//     console.log(args2.join(', '));
//     console.log(args3.join(', '));
// }

// showARGS('Hellow', 'World');

// function display(){
//     console.log('Запуск функции с задержкой.');
//     console.log(arguments[0], arguments[1]);
// }

// setTimeout(display,1000, 'Hello', 'world');


 
// var str=prompt('ISON   ');
// try{
//     var json=JSON.parse(str);
// }catch(ex){
//     alert('Введен некорректный JSON');
// }
// console.log(json);

// function calcByrthYear(){
//     var age=prompt('Введите ваш возраст ');
//     var birthYear=new Date().getFullYear()-age;
//     if(isNaN(birthYear)){
//         throw('Введено нечисловое значение');
//     }else if (age!==null){
//         alert('Ваш год рождения '+birthYear)
//     }  
// }

// try{
//     calcByrthYear();
// }catch(ex){
//     alert(ex);
// }



// if(/1/.test('2')){
//     console.log(true);
// }

//  var phone=prompt('Номер телефона в формате: xxx xx xx');
//  var isValidPhone=/\d{3} \d{2} \d{2}/
//  alert(isValidPhone.test(phone));


// var str='123afsrwt1524';
// console.log(str.replace(/\d/g , ''));//удаление десятичный чисел
// //g - применить ко всей строке





