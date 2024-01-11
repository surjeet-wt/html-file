$(document).ready(function () {


if ($(window).width() > 991) {
    
    
    $('#careers1').hover(function() {
        $('#careers_open1, #careers1').addClass('active');
        $('#careers_open2, #careers_open3, #careers_open4, #careers_open5, #careers_open6, #careers2, #careers3, #careers4, #careers5, #careers6').removeClass('active');
    });
    $('#careers2').hover(function() {
        $('#careers_open2, #careers2').addClass('active');
        $('#careers_open1, #careers_open3, #careers_open4, #careers_open5, #careers_open6, #careers1, #careers3, #careers4, #careers5, #careers6').removeClass('active');
    });
    $('#careers3').hover(function() {
        $('#careers_open3, #careers3').addClass('active');
        $('#careers_open2, #careers_open1, #careers_open4, #careers_open5, #careers_open6, #careers2, #careers1, #careers4, #careers5, #careers6').removeClass('active');
    });
    $('#careers4').hover(function() {
        $('#careers_open4, #careers4').addClass('active');
        $('#careers_open2, #careers_open3, #careers_open1, #careers_open5, #careers_open6, #careers1, #careers3, #careers2, #careers5, #careers6').removeClass('active');
    });
    $('#careers5').hover(function() {
        $('#careers_open5, #careers5').addClass('active');
        $('#careers_open2, #careers_open3, #careers_open4, #careers_open1, #careers_open6, #careers2, #careers3, #careers4, #careers1, #careers6').removeClass('active');
    });
    $('#careers6').hover(function() { 
        //alert('f');
        $('#careers_open6, #careers6').addClass('active');
        $('#careers_open1, #careers_open3, #careers_open4, #careers_open5, #careers_open2, #careers1, #careers3, #careers4, #careers5, #careers2').removeClass('active');
    });
    
}



// 	// WOw
	wow = new WOW(
		{
		boxClass:     'wow',      // default
		animateClass: 'animated', // default
		offset:       0,          // default
		mobile:       true,       // default
		live:         true        // default
	  }
	  )
	  wow.init();



	$(window).scroll(function() {
        var sticky = $('header'),
            scroll = $(window).scrollTop();
        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });


     $('.counter').counterUp({
        delay: 40,
        time: 3000
    }); 
	



if ($(window).width() < 991) {
     $('.car').addClass('mbslider');
         $('.mbslider').slick({
          dots: false,
          infinite:true,
          loop:true,
          speed: 500,
          centerMode: true,
        centerPadding: '30px',
          slidesToShow:1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          nextArrow:false,
          prevArrow:false,
          arrows:false
         // prevArrow: '<span class="product-showcase-carousel-controls product-showcase-carousel-controls--left"><img src="images/arrow.svg" /></span>',
          //nextArrow: '<span class="product-showcase-carousel-controls product-showcase-carousel-controls--right"><img src="images/arrow.svg" /></span>',
        });

    };
});