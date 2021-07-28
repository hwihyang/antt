$(function(){

   
    $('.popup p').mouseenter(function(){
        $('.popup ul').addClass('on');
    });
    $('.popup p').mouseleave(function(){
        $('.popup ul').removeClass('on');
    });

})//제이쿼리 전체 끝