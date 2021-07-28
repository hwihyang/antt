$(function(){
    var on = 0;
    $('.nav_btn').click(function(){
        if (on == 0) {
            $('.nav_btn').addClass('on');
            $('#nav').slideDown();
            on = 1;
        }else{
            $('.nav_btn').removeClass('on');
            $('#nav').slideUp();
            on = 0;
        }
    })
    var on = 0;
    $('#sec2 .depth1').click(function(){
        if (on == 0) {
            $('#sec2 .depth1 ul').slideDown();
            $('#sec2 .depth1 img').attr('src','images/sub_arr_01_Top.png');
            on = 1;
        }else{
            $('#sec2 .depth1 ul').slideUp();
            $('#sec2 .depth1 img').attr('src','images/sub_arr_01.png');
            on = 0;
        }
    })
    var on = 0;
    $('#sec2 .depth2').click(function(){
        if (on == 0) {
            $('#sec2 .depth2 ul').slideDown();
            $('#sec2 .depth2 img').attr('src','images/sub_arr_01_Top.png');
            on = 1;
        }else{
            $('#sec2 .depth2 ul').slideUp();
            $('#sec2 .depth2 img').attr('src','images/sub_arr_01.png');
            on = 0;
        }
    })
    var on = 0;
    $('li .right_in_left p img').click(function(){
        if (on == 0) {
            $('.right_in_left img').attr('src','images/sub_arr_05.png');
            on = 1;
        }else{
            $('.right_in_left img').attr('src','images/sub_arr_05_02.png');
            on = 0;
        }
    })
    var on = 0;
    $('.input #checkbox').click(function(){
        if (on == 0) {
            $('.input #checkbox').addClass('on');
            $('#nav').slideDown();
            on = 1;
        }else{
            $('.nav_btn').removeClass('on');
            $('#nav').slideUp();
            on = 0;
        }
    })
    $(window).resize(function(){
        if($(window).width() > 761){
            $('#header #nav').show();
            $('.nav_btn').addClass('on');
            
        } else{
            $('#header #nav').hide();
            $('.nav_btn').removeClass('on');
            
            on = 0;
        }
    })
})
