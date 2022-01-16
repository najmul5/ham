(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        // work section isotop 
    	$('.work-menu button').on('click', function(){
    		var selector = $(this).attr('data-filter');

    		$('.work-item .row').isotope({
    			filter: selector
    		});
    	});

        // work section popup
        $('.magnafic-img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        // team popup image
        $('.team-popup-img').magnificPopup({
            type: 'image',
        });

    	$('.feedback-carousel, .heroarea-carousel').owlCarousel({
    		items: 1,
    		nav: true,
    		navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
    		loop: true,
    		dotsData: true,
    		autoplay: true,
    	});


    	$('.count').counterUp({
	        delay: 15,
	        time: 3000
	    });


        $(window).scroll(function(){
            if($(this).scrollTop() <600 ){
                $('nav').removeClass('nav-opacity-bg')
                $('#backtotop').fadeOut();
            }else{
                $('nav').addClass('nav-opacity-bg')
                $('#backtotop').fadeIn();
            }
        });

        $('#backtotop').click(function(){
            $('html, body').animate({
                scrollTop: 0
            }, 700);
            return false;
        });        


    });


}(jQuery));	