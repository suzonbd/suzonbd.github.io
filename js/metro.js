jQuery(document).ready(function($) {

//Timeline
  $('.timeline-item-trigger span').click(function () {
      if ($(this).hasClass('fa fa-plus')) {
          $(this).removeClass('fa fa-plus').addClass('fa fa-minus');
      } else {
          $(this).removeClass('fa fa-minus').addClass('fa fa-plus');
      }
  });
  $('.timeline-item-title').click(function () {
      $trigger = $(this).parent().parent().find('.timeline-item-trigger span');
      if ($trigger.hasClass('fa fa-plus')) {
          $trigger.removeClass('fa fa-plus').addClass('fa fa-minus');
      } else {
          $trigger.removeClass('fa fa-minus').addClass('fa fa-plus');
      }
  });	

//Ajax portfolio load
	$(window).load(function() { 		
		(function(){
		  
			  var container = $( "#project-details-box" );
			  var $items = $('.portfolio-container .portfolio-item');
			  index = $items.length;
			  $('.portfolio-container .portfolio-item').click(function(){
				  if ($(this).hasClass('active')){
				  } else 
				  { lastIndex = index;
				  index = $(this).index();
				  $items.removeClass('active');
				  $(this).addClass('active');
				  var myUrl = $(this).find('.project-link').attr("href") + " .port-holder"; 
				  $('#project-data').animate({opacity:0}, 400,function(){
						$("#project-data").load(myUrl,function(e){  
							var $helper = $('.helper');
							var height = $helper.height();
								$('#project-data').css("min-height", height);
								
				 				$("#project-carousel").owlCarousel({
				 					autoPlay: 3000,
									navigation : false, // Show next and prev buttons
									slideSpeed : 300,
									paginationSpeed : 400,
									singleItem:true
									 
									// "singleItem:true" is a shortcut for:
									// items : 1,
									// itemsDesktop : false,
									// itemsDesktopSmall : false,
									// itemsTablet: false,
									// itemsMobile : false
								});
		
						});
						$('#project-data').delay(400).animate({opacity:1}, 400);
				  });
				  $('html, body').animate({ scrollTop: $(".portfolio-start").offset().top -40}, 900);
				  //Project Page Open
					  $('#project-details-box').slideUp(600, function(){
						  $('#project-data').css('visibility', 'visible');}).delay(1100).slideDown(1000,function(){				  
								//bxslider//$('#project-data').fadeIn('slow',function(){initBxModal();});
								$('.fade_in').each(function () {
									$(this).appear(function() {
									  $(this).delay(100).animate({opacity:1,right:"0px"},1000);
									});	
								});
						  });
				  }
				  return false;       
			  });
			  //Project Page Close
			  $(document).on('click', '#portfolio-close', function(event) {
				  $('#project-data').animate({opacity:0}, 400,function(){		
						$('#project-details-box').delay(400).slideUp(400);	
				  });
						$('html, body').delay(1000).animate({ scrollTop: $(".portfolio-start").offset().top - 70}, 800);
						$items.removeClass('active') ;
						return false;
			  });
		
		})();

	});  

});