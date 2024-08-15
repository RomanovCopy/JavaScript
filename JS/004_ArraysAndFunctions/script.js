'use strict';

//var anotherCar=new Object();

 var car = {
    mark: 'BMV',
    model:'X5',
    'year of manufacture': 2010,

    getName: function(){
        return this.mark + ' ' + this.model;
    }
 };

 console.log(car.mark);
 console.log(car.model);
 console.log(car['year of manufacture']);
 console.log(car.getName());
