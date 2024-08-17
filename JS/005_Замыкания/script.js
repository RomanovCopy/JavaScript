
//IIFE

(function (){
    var localVar=100;
    window.foo=function(){
        console.log(localVar++);
    }
})();


 
