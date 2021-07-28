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
    $(".center").slick({
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
    $(".center2").slick({
        dots: false,
        arrows:false,
        autoplay : true,	
        autoplaySpeed : 1000,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
    $('.tabSet').each(function(){       
      var anchor = $(this).find('.tabs a');
      var anchor_on = $(this).find('.tabs a.on');
	  var phref_on =  anchor_on.attr('phref');
	  var this_panel = $(this).find('.panel')

      $(phref_on).show();
      anchor.each(function(){
           var phref = $(this).attr('phref');
		   
            $(this).click(function(){
				this_panel.hide();
              anchor.removeClass('on'); //$('.tabs a')
              $(phref).show();
              $(this).addClass('on');

          }) //click
       }) //anchor
     })  //tabSet
    var on = 0;
    $('#sec4 .panels .show_01 .left').click(function(){
        if (on == 0) {
           // $('#sec4 .center2').slideDown();
           $('#sec4 .center2').animate({height:250}) //위치, 사이즈
            on = 1;
        }else{
           // $('#sec4 .center2').slideUp();
            $('#sec4 .center2').animate({height:0})
            on = 0;
        }
    })
    var on = 0;
    $('#sec3 .top_sec2 .check').click(function(){
        if (on == 0) {
            $('#sec3 .top_sec2 .check img').attr('src','images/sub_03_arr_01.png');
            on = 1;
        }else{
            $('#sec3 .top_sec2 .check img').attr('src','images/sub_03_arr_01_02.png');
            on = 0;
        }
    })
    var on = 0;
    $('#sec3 .top_sec .check2').click(function(){
        if (on == 0) {
            $('#sec3 .top_sec .check2 img').attr('src','images/sub_03_arr_01.png');
            on = 1;
        }else{
            $('#sec3 .top_sec .check2 img').attr('src','images/sub_03_arr_01_02.png');
            on = 0;
        }
    })
     if($(window).width() > 761){
            $('#header #nav').show();
            $('.nav_btn').addClass('on');
            $('#sec1 img').attr('src','images/sub_header_01.jpg');
            $('#sec3 #panel1-1 .left .img1 img').attr('src','images/sub_03_sec2_01.jpg');
       } else{
            $('#header #nav').hide();
            $('.nav_btn').removeClass('on');
            $('#sec1 img').attr('src','images/sub_02_mo_se1.png');
            $('#sec3 #panel1-1 .left .img1 img').attr('src','images/sub_03_mo_02.jpg');
            on = 0;
        }

    $(window).resize(function(){
        if($(window).width() > 761){
            $('#header #nav').show();
            $('.nav_btn').addClass('on');
               $('#sec1 img4').attr('src','images/sub_header_01.jpg');
            $('#sec3 #panel1-1 .left .img1 img').attr('src','images/sub_03_sec2_01.jpg');
        } else{
            $('#header #nav').hide();
            $('.nav_btn').removeClass('on');
            $('#sec1 img').attr('src','images/sub_02_mo_se1.png');
            $('#sec3 #panel1-1 .left .img1 img').attr('src','images/sub_03_mo_02.jpg');
            on = 0;
        }
    })
    var on = 0;
    $('#payment .in_sec .tell #submit').click(function(){
        if (on == 0) {
            $('#payment .in_sec .tell2').slideDown();
            on = 1;
        }else{
            $('#payment .in_sec .tell2').slideUp();
            on = 0;
        }
    })
    $(document).on('click','#chk_all',function(){
    if($('#chk_all').is(':checked')){
       $('.del-chk').prop('checked',true);
    }else{
       $('.del-chk').prop('checked',false);
    }
})
$(document).on('click','.del-chk',function(){
    if($('input[class=del-chk]:checked').length==$('.del-chk').length){
        $('#chk_all').prop('checked',true);
    }else{
       $('#chk_all').prop('checked',false);
    }
});
})
