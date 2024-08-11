$(function(){
    $('#changeButton').css({
        'margin-left':'20px',
        'nargin-bottom':'40px'
    }).click(function(){
        $('.news-time').css('color', 'red');
        $('.news-comments-count').each(function(){
            if($(this).text()>20){
                $(this).css('color', "green");
            }
        });
    });
    // $('.news-time').click(function(){
    //     $(this).parent().parent().css('color', 'blue');
    // });
    // $('.news-time').click(function(){
    //     $(this).parents('.news-item').css('color', 'blue');
    // });
    $('.news-time').click(function(){
        var header=$('#column-left h2');
        if(header.css('display')=='block'){
            // header.css('display', 'none');
            header.hide();
        }else{
            // header.css('display', 'block');
            header.show();
        }
    });

     $('#popup-button').click(function(){
        $('#popup-container').fadeIn(400);
    });
    $('#popup-container').click(function(event){
         if(event.target==this){
            $(this).fadeOut(400);
         }
        
    });

});

0:14:12