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
    var on = 0;
    $('#sec3 .inner2 .top .arr .close').click(function(){
        if (on == 0) {            
            $('#sec3 .inner2 .top .arr ul').slideDown();
            on = 1;
        }else{            
            $('#sec3 .inner2 .top .arr ul').slideUp();
            on = 0;
        }
    })
    var on = 0;
    $('#sec3 .close2').click(function(){
        if (on == 0) {            
            $('#sec3 .inner3').show();
            on = 1;
        }else{            
            $('#sec3 .inner3').hide();
            on = 0;
        }
    })
    var on = 0;
    $('#sec3 .left .click2').click(function(){
        if (on == 0) {            
             $('#sec3 .left .click2 img').attr('src','images/sub_02_mo_chick.png');
            on = 1;
        }else{            
             $('#sec3 .left .click2 img').attr('src','images/imagessub_02_mo_chick2.png');
            on = 0;
        }
    })
    
     if($(window).width() > 761){
            $('#header #nav').show();
            $('.nav_btn').addClass('on');
            $('#sec1 img').attr('src','images/sub_header_01.jpg');
            $('#sec3 article .img1 img').attr('src','images/sub_01.jpg');
            $('#sec3 article .img2 img').attr('src','images/sub_02.jpg');
            $('#sec3 article .img3 img').attr('src','images/sub_03.jpg');
            $('#sec3 article .img4 img').attr('src','images/sub_04.jpg');
            $('#sec3 article .img5 img').attr('src','images/sub_05.jpg');
            $('#sec3 article .img6 img').attr('src','images/sub_06.jpg');
            $('#sec3 article .img7 img').attr('src','images/sub_7.jpg');
            $('#sec3 article .img8 img').attr('src','images/sub_08.jpg');
       } else{
            $('#header #nav').hide();
            $('.nav_btn').removeClass('on');
            $('#sec1 img').attr('src','images/sub_02_mo_se1.png');
            $('#sec3 article .img1 img').attr('src','images/sub_mo_01.png');
            $('#sec3 article .img2 img').attr('src','images/sub_mo_02.png');
            $('#sec3 article .img3 img').attr('src','images/sub_mo_03.png');
            $('#sec3 article .img4 img').attr('src','images/sub_mo_04.png');
            $('#sec3 article .img5 img').attr('src','images/sub_mo_05.png');
            $('#sec3 article .img6 img').attr('src','images/sub_mo_06.png');
            $('#sec3 article .img7 img').attr('src','images/sub_mo_07.png');
            $('#sec3 article .img8 img').attr('src','images/sub_mo_08.png');
            on = 0;
        }

    $(window).resize(function(){
        if($(window).width() > 761){
            $('#header #nav').show();
            $('.nav_btn').addClass('on');
               $('#sec1 img4').attr('src','images/sub_header_01.jpg');
            $('#sec3 article .img1 img').attr('src','images/sub_01.jpg');
            $('#sec3 article .img2 img').attr('src','images/sub_02.jpg');
            $('#sec3 article .img3 img').attr('src','images/sub_03.jpg');
            $('#sec3 article .img4 img').attr('src','images/sub_04.jpg');
            $('#sec3 article .img5 img').attr('src','images/sub_05.jpg');
            $('#sec3 article .img6 img').attr('src','images/sub_06.jpg');
            $('#sec3 article .img7 img').attr('src','images/sub_7.jpg');
            $('#sec3 article .img8 img').attr('src','images/sub_08.jpg');
        } else{
            $('#header #nav').hide();
            $('.nav_btn').removeClass('on');
            $('#sec1 img').attr('src','images/sub_02_mo_se1.png');
            $('#sec3 article .img1 img').attr('src','images/sub_mo_01.png');
            $('#sec3 article .img2 img').attr('src','images/sub_mo_02.png');
            $('#sec3 article .img3 img').attr('src','images/sub_mo_03.png');
            $('#sec3 article .img4 img').attr('src','images/sub_mo_04.png');
            $('#sec3 article .img5 img').attr('src','images/sub_mo_05.png');
            $('#sec3 article .img6 img').attr('src','images/sub_mo_06.png');
            $('#sec3 article .img7 img').attr('src','images/sub_mo_07.png');
            $('#sec3 article .img8 img').attr('src','images/sub_mo_08.png');
            on = 0;
        }
    })
    var on = 0;
    $('#sec3 .inner3 ul .checkbox #checkbox').click(function(){
        if (on == 0) {
            $('#sec3 .inner3 ul .checkbox input').addClass('checked');
            on = 1;
        }else{
            $('#sec3 .inner3 ul .checkbox input').removeClass('checked');
            on = 0;
        }
    })
})

