$(function(){

    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        arrows:true,
        dots: true,
        infinite:true,
        pauseOnHover:true
      });

    $(".regular").slick({
        arrows:true,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite:true,
        pauseOnHover:true
      });
    
    $(".center").slick({
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
    $(".vertical-center").slick({
        arrows : false, 
        dots: false,
        vertical: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed : 1000,
        pauseOnHover : true,
      });
    
    $('.popup p').mouseenter(function(){
        $('.popup ul').addClass('on');
    });
    $('.popup p').mouseleave(function(){
        $('.popup ul').removeClass('on');
    });


    $('.close').click(function(){
        $('#pop_up').slideUp(); //hide, slideUp, fadeOut
    })
    var lang = 0;
    $('.lang').click(function(){
        //다른 열려있는 창들을 닫거나 버튼 디자인을 제거함
        $('.top button.login').removeClass('on');
        $('.top div.login_box').hide();
        login = 0;
        $('.top button.search').removeClass('on');
        $('.top div.search_box').hide();
        search = 0;

     if (lang == 0){
      $('.lang_box').fadeIn();
      $(this).addClass('on');
      lang = 1;
     } else {
          $('.lang_box').fadeOut();
          $(this).removeClass('on');
          lang = 0
     }
  }) //lang
    var login = 0;
    $('.login').click(function(){
        $('.top button.lang').removeClass('on');
        $('.top div.lang_box').hide();
        lang = 0;
        $('.top button.search').removeClass('on');
        $('.top div.search_box').hide();
        search = 0;

        if(login == 0){
            $('.login_box').fadeIn();
            $(this).addClass('on');
            login = 1;
        } else {
            $('.login_box').fadeOut();
            $(this).removeClass('on')
            login = 0;
        }
    })
    var search = 0;
    $('.search').click(function(){
         $('.top button.lang').removeClass('on');
        $('.top div.lang_box').hide();
        lang = 0;
        $('.top button.login').removeClass('on');
        $('.top div.login_box').hide();
        login = 0;

        if(search == 0){
            $('.search_box').fadeIn(); 
            $(this).addClass('on');
            search = 1;
        } else {
            $('.search_box').fadeOut();
            $(this).removeClass('on')
            search = 0;
        }
    })
})//제이쿼리 전체 끝