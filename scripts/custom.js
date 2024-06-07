$(window).on('load',function() { 
	//Preloaders
	setTimeout(function(){$("#page-preloader").addClass('hide-preloader');},250);// will fade out the white DIV that covers the website.
});

$(document).ready(function(){      
    'use strict'	
	function init_template(){

		$('.preload-image').lazyload();

		$('.show-navigation').on('click',function(){
			  $($('.navigation a')).each(function(i) {
				var $li = $(this);
				setTimeout(function() {
				  $li.toggleClass('visible-menu');
				}, i*100); // delay 100 ms
			  });	
			return false;
		});	
	}
	setTimeout(init_template, 0);
	
    $(function(){
		'use strict';
		var options = {
			prefetch: true,
			prefetchOn: 'mouseover',
			cacheLength: 100,
			scroll: true, 
			blacklist: '.default-link' && '.show-gallery',
			forms: 'contactForm',
			onStart: {
				duration:350, // Duration of our animation
				render: function ($container) {
				$container.addClass('is-exiting');// Add your CSS animation reversing class
				$("#page-preloader").removeClass('hide-preloader');
			}
        },
        onReady: {
			duration: 50,
			render: function ($container, $newContent) {
				$container.removeClass('is-exiting');// Remove your CSS animation reversing class
				$container.html($newContent);// Inject the new content
				$("#page-preloader").addClass('hide-preloader');
			}
		},
        onAfter: function($container, $newContent) {
            setTimeout(init_template, 0)//Timeout required to properly initiate all JS Functions. 
			$("#page-preloader").addClass('hide-preloader');

        }
      };
      var smoothState = $('#page-transitions').smoothState(options).data('smoothState');
    });      
});