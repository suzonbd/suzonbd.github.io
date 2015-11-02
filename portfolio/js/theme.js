// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
$(window).load(function() {
	setTimeout(function(){
		$(".cover").fadeOut(2000);
	},1000);
})
$(document).ready(function(){
	
	url = GMaps.staticMapURL({
		size: [610, 300],
		lat: 23.764891,
		lng: 90.359942
	});

	$('<img/>').attr('src', url).attr('class','img-thumbnail').appendTo('#contact-map');
	  
	$("#color-switcher li a").click(function() { 
		$("#theme-color").attr("href",$(this).attr('data-rel'));
		return false;
	});
	
});

$(function(){
	 $('.slide-out-div').tabSlideOut({
		 tabHandle: '.handle',                              //class of the element that will be your tab
		 pathToTabImage: 'images/setting.png',          //path to the image for the tab (optionaly can be set using css)
		 imageHeight: '40px',                               //height of tab image
		 imageWidth: '40px',                               //width of tab image    
		 tabLocation: 'left',                               //side of screen where tab lives, top, right, bottom, or left
		 speed: 300,                                        //speed of animation
		 action: 'click',                                   //options: 'click' or 'hover', action to trigger animation
		 topPos: '80px',                                   //position from the top
		 fixedPosition: false                               //options: true makes it stick(fixed position) on scroll
	 });
 });
 
var Page = (function() {
	
	var config = {
			$bookBlock : $( '#bb-bookblock' ),
			$navNext : $( '.bb-nav-next' ),
			$navPrev : $( '.bb-nav-prev' )					
		},
		init = function() {
			config.$bookBlock.bookblock( {
				speed : 1000,
				shadowSides : 0.8,
				shadowFlip : 0.4,
				onEndFlip : function(old, page, isLimit) {
					current = page;
					// Add more animate css classes, if you are using other classes.
					$("#page-"+page+" .animateFadeInLeft").addClass('animated fadeInLeft').show();
					$("#page-"+page+" .animateFadeInRight").addClass('animated fadeInRight').show();
					$("#page-"+page+" .animateFadeInUp").addClass('animated fadeInUp').show();
					$("#page-"+page+" .animateFadeInDown").addClass('animated fadeInDown').show();
					$("#page-"+page+" .animateFlipInX").addClass('animated flipInX').show();
					$("#page-"+page+" .animateFlipInY").addClass('animated flipInY').show();
					$("#page-"+page+" .animateBounceInLeft").addClass('animated bounceInLeft').show();
					$("#page-"+page+" .animateBounceInRight").addClass('animated bounceInRight').show();
					setTimeout(function() {
						$("#page-"+page+" .animateFadeInLeft").removeClass("animateFadeInLeft").removeClass("animated fadeInLeft");
						$("#page-"+page+" .animateFadeInRight").removeClass("animateFadeInRight").removeClass("animated fadeInRight");
						$("#page-"+page+" .animateFadeInUp").removeClass("animateFadeInUp").removeClass("animated fadeInUp");
						$("#page-"+page+" .animateFadeInDown").removeClass("animateFadeInDown").removeClass("animated fadeInDown");
						$("#page-"+page+" .animateFlipInX").removeClass("animateFlipInX").removeClass("animated flipInX");
						$("#page-"+page+" .animateFlipInY").removeClass("animateFlipInY").removeClass("animated flipInY");
						$("#page-"+page+" .animateBounceInLeft").removeClass("animateBounceInLeft").removeClass("animated bounceInLeft");
						$("#page-"+page+" .animateBounceInRight").removeClass("animateBounceInRight").removeClass("animated bounceInRight");
					}, 1000);
					
					if ($("#page-3").is(":visible")){
						$('.progress .progress-bar').progressbar();
					}
				}
			} );
			initEvents();
		},
		initEvents = function() {
			
			var $slides = config.$bookBlock.children();

			// add navigation events
			config.$navNext.on( 'click touchstart', function() {
				config.$bookBlock.bookblock( 'next' );
				return false;
			} );

			config.$navPrev.on( 'click touchstart', function() {
				config.$bookBlock.bookblock( 'prev' );
				return false;
			} );
			
			// add swipe events
			$slides.on( {
				'swipeleft' : function( event ) {
					config.$bookBlock.bookblock( 'next' );
					return false;
				},
				'swiperight' : function( event ) {
					config.$bookBlock.bookblock( 'prev' );
					return false;
				}
			} );

			// add keyboard events
			$( document ).keydown( function(e) {
				var keyCode = e.keyCode || e.which,
					arrow = {
						left : 37,
						up : 38,
						right : 39,
						down : 40
					};

				switch (keyCode) {
					case arrow.left:
						config.$bookBlock.bookblock( 'prev' );
						break;
					case arrow.right:
						config.$bookBlock.bookblock( 'next' );
						break;
				}
			} );
		};
		
		$menuItems = $("#menu li a");
		current = 0;
		$menuItems.on( 'click', function() {

			var $el = $( this ),
				idx = $el.attr("data-page"),
				reachedToPage = false;
				
			config.$bookBlock.bookblock( 'jump',idx	 );
			return false;
			 
		});
		
		$("#aboutme").on( 'click', function() {
			config.$bookBlock.bookblock( 'next' );
			return false;
		});

		return { init : init };

})();