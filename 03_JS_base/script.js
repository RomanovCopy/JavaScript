$(function(){
    
    $('#change_color').on('click', function(){
        $('#container').css('color','red');
    });
    $('#container').on('mouseover', function(){
        $('#container').css('color','red');
    });
    $('#container').on('mouseout', function(){
        $('#container').css('color','green');
    });
    $('#container').on('dblclick', function(){
        $('#container').css('color','blue');
    });


    $('textarea').on('keydown', function(event){
        if(event.which < 48 || event.which > 57){
            return false;
        }
    });

    $('textarea').on('focus', function(event){
        $('textarea').css('background-color', 'green')
    });

    $('textarea').on('blur', function(event){
        $(this).css('background-color', 'red')
    });
});