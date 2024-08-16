'use strict';

//var anotherCar=new Object();

 var car1 = {
    mark: 'BMV',
    model:'X5',
    'year of manufacture': 2010,

    // getName: function(){
    //     return this.mark + ' ' + this.model;
    // }
 };

//  console.log(car.mark);
//  console.log(car.model);
//  console.log(car['year of manufacture']);
//  console.log(car.getName());

var car2 = {
    mark: 'VAZ',
    model:'Priora',
    'year of manufacture': 2010,
    price: 120000

    // getName: function(){
    //     return this.mark + ' ' + this.model;
    // }
 };

function printObjectProps(obj){
    for(var prop in obj){
        if(obj.hasOwnProperty(prop)){
            var propValue=obj[prop];
            console.log(prop+': '+propValue)
        }
        
    }
}
// obj.hasOwnProperty(prop) - действительно-ли объект obj, а не его родители,
// содержит свойство prop

printObjectProps(car1);
printObjectProps(car2);

//Копирование свойств объекта

// var car2={};

// for(var prop in car1){
//     var propValue=car1[prop];
//     car2[prop]=propValue;
// }

//Массивы

// var cars=new Array();

var cars=[car1];
cars.push(car2);
cars.length;

console.log(cars[0]);
console.log(cars[1]);

var cars1=[
    {
        mark: 'BMV',
        model:'X5',
        'year of manufacture': 2010,
    },
    {
        mark: 'VAZ',
        model:'Priora',
        'year of manufacture': 2010,
        price: 120000
    }
];





