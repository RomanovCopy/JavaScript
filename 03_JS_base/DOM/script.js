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
    $('.news-time').click(function(){
        $(this).parent().parent().css('color', 'blue');
    });
});