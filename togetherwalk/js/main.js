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
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        arrows : true,
        dots: true,
        responsive: [ { breakpoint: 761,
                           settings: {
                             arrows : false,
                             dots: false, 
                            }
                        }
                 ] 
      });
    $(".center3").slick({
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [ { breakpoint: 761,
                           settings: {
                             arrows : false,                       }
                        }
                 ] 
        
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

     if($(window).width() > 761){
            $('#header #nav').show();
            $('.nav_btn').addClass('on');
            $('#slide .lazy .slide_1 img').attr('src','images/slide1.jpg');
            $('#slide .lazy .slide_2 img').attr('src','images/slide2.jpg');

            $('#sec4 .sec4_mo_1').attr('src','images/sec3_1.jpg');
             $('#sec4 .sec4_mo_2').attr('src','images/sec3_2.jpg');
              $('#sec4 .sec4_mo_3').attr('src','images/sec3_3.jpg');
               $('#sec4 .sec4_mo_4').attr('src','images/sec3_4.jpg');
        } else{
            $('#header #nav').hide();
            $('.nav_btn').removeClass('on');
            $('#slide .lazy .slide_1 img').attr('src','images/silid_mo.jpg');
            $('#slide .lazy .slide_2 img').attr('src','images/silid_mo_2.jpg');

            $('#sec4 .sec4_mo_1').attr('src','images/sec4_mo_1.jpg');
            $('#sec4 .sec4_mo_2').attr('src','images/sec4_mo_2.jpg');
            $('#sec4 .sec4_mo_3').attr('src','images/sec4_mo_3.jpg');
            $('#sec4 .sec4_mo_4').attr('src','images/sec4_mo_4.jpg');
            on = 0;
        }

    $(window).resize(function(){
        if($(window).width() > 761){
            $('#header #nav').show();
            $('.nav_btn').addClass('on');
            $('#slide .lazy .slide_1 img').attr('src','images/slide1.jpg');
            $('#slide .lazy .slide_2 img').attr('src','images/slide2.jpg');
            $('#sec4 .sec4_mo_1').attr('src','images/sec3_1.jpg');
             $('#sec4 .sec4_mo_2').attr('src','images/sec3_2.jpg');
              $('#sec4 .sec4_mo_3').attr('src','images/sec3_3.jpg');
               $('#sec4 .sec4_mo_4').attr('src','images/sec3_4.jpg');
        } else{
            $('#header #nav').hide();
            $('.nav_btn').removeClass('on');
            $('#slide .lazy .slide_1 img').attr('src','images/silid_mo.jpg');
            $('#slide .lazy .slide_2 img').attr('src','images/silid_mo_2.jpg');
            $('#sec4 .sec4_mo_1').attr('src','images/sec4_mo_1.jpg');
            $('#sec4 .sec4_mo_2').attr('src','images/sec4_mo_2.jpg');
            $('#sec4 .sec4_mo_3').attr('src','images/sec4_mo_3.jpg');
            $('#sec4 .sec4_mo_4').attr('src','images/sec4_mo_4.jpg');
            on = 0;
        }
    })
    $(".modal").click(function (){
      $("#pop_up").show();
   });
   $("#pop_up button").click(function (){
      $("#pop_up").hide();
   });

   $('.modal_select a').each(function(){
		      
		$(this).click(function(){
			var a_href = $(this).attr('href');
			$('.pop').hide();
			$(a_href).show();
			$('.modal_select a').removeClass('select_btn');
			$(this).addClass('select_btn');

		$('.btn').click(function(){
 		  $('.modal_select a').removeClass('select_btn');
		  $(a_href).hide();
           })
		})

	 })
     $('.tabs2et2').each(function(){       
      var anchor = $(this).find('.tabs2 a');
      var anchor_on = $(this).find('.tabs2 a.on');
	  var phref_on =  anchor_on.attr('phref');
	  var this_panel = $(this).find('.panel2')

      $(phref_on).show();
      anchor.each(function(){
           var phref = $(this).attr('phref');
		   
            $(this).click(function(){
				this_panel.hide();
              anchor.removeClass('on'); //$('.tabs2 a')
              $(phref).show();
              $(this).addClass('on');

          }) //click
       }) //anchor
     })  //tabs2et2
})