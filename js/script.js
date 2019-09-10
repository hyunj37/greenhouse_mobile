/** 네비게이션 메뉴 **/
/*오픈*/
$('.menu, .fmenu1').click(function(){
    $('#nav-menu').show();
    $('.wrapper').animate({'left':'100%'}, function(){
        $('html').addClass('nav-open');
    });
});
$('.close').click(function(){
    $('html').removeClass('nav-open');
    $('.wrapper').animate({'left':0}, function(){
        $('#nav-menu').hide();
    });
});
/*아코디언*/
$('.has-sub').click(function(){
    if($(this).hasClass('on')){
        $(this).removeClass('on');
        $(this).siblings('.sub-menu').slideUp();
    }else{
        $('.has-sub').removeClass('on');
        $('.has-sub').siblings('.sub-menu').slideUp();

        $(this).addClass('on');
        $(this).siblings('.sub-menu').slideDown();
    }
});


/** 상단 헤더 **/
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll>1) {
        $('#header').css('background-color','rgba(256,256,256,.9)');
        $('#header').addClass('up-head');
    }else if(scroll<=1){
        $('#header').css('background-color','transparent');
        $('#header').removeClass('up-head');
    }
});

/** 콘텐츠 **/
/*탭*/
$('.tab-menu .pick1 h4').addClass('on');
$('.tab-menu .pick1 ul').show();
$('.tab-menu h4').click(function(){
    $('.tab-menu h4').siblings('.tab-menu ul').hide();
    $('.tab-menu h4').removeClass('on');
    $(this).siblings('.tab-menu ul').show();
    $(this).addClass('on');
});











