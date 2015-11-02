(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $(".header_area").sticky({topSpacing:0});
        


  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-63
        }, 1000);
        return false;
      }
    }
  });

        
        $('body').scrollspy({ target: '.navbar-collapse', })
        
        
        $('.paralax-bg, .top-area-bg').scrolly({bgParallax: true});

    });
    
    $(".navbar-toggle").click(function(){
     $("body").addClass("mobile-menu");    
    });
    
    $("ul.nav.navbar-nav li a").click(function(){
     $(".navbar-collapse").removeClass("in");    
    });
     
    


    jQuery(window).load(function(){

        
    });
    
    
    //for text animation



}(jQuery));	

$(function(){
	new WOW().init();
});


//mix it up

$(function(){
    $('#mix').mixItUp();
});

//cardslide
 $(function () {
        
        $('#demoslider2').cardSlider({autoPlay: true});
    });



//form
	
	
    //breakdown the labels into single character spans
$(".flp label").each(function(){
	var sop = '<span class="ch">'; //span opening
	var scl = '</span>'; //span closing
	//split the label into single letters and inject span tags around them
	$(this).html(sop + $(this).html().split("").join(scl+sop) + scl);
	//to prevent space-only spans from collapsing
	$(".ch:contains(' ')").html("&nbsp;");
})

var d;
//animation time
$(".flp input").focus(function(){
	//calculate movement for .ch = half of input height
	var tm = $(this).outerHeight()/2 *-1 + "px";
	//label = next sibling of input
	//to prevent multiple animation trigger by mistake we will use .stop() before animating any character and clear any animation queued by .delay()
	$(this).next().addClass("focussed").children().stop(true).each(function(i){
		d = i*50;//delay
		$(this).delay(d).animate({top: tm}, 200, 'easeOutBack');
	})
})
$(".flp input").blur(function(){
	//animate the label down if content of the input is empty
	if($(this).val() == "")
	{
		$(this).next().removeClass("focussed").children().stop(true).each(function(i){
			d = i*50;
			$(this).delay(d).animate({top: 0}, 500, 'easeInOutBack');
		})
	}
})

  var max_text=100;
    $("#character_remaining").html("<b>"+max_text+" characters remaining.</b>");
    $("textarea").keyup(function(){
        var text_length=$("textarea").val().length;
        var total_character_remaining=max_text-text_length;
      $("#character_remaining").html("<b>"+total_character_remaining+" characters remaining.</b>");
    });

//

     $("#fullName").keyup(function(){
        $("#fullName").css("background-color", "yellow" ).css('opacity', 0.5);
    }); 
    $("#pass").keydown(function(){
        $("#pass").css("background-color", "red" ).css('opacity', 0.3);
    });
   
    $("#fullN").focusin(function(){
        $("#fullN").css("background-color", "yellow" ).css('opacity', 0.5);
    }); 
    $("#pas").focusout(function(){
        $("#pas").css("background-color", "red" ).css('opacity', 0.3);
    });
    

setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 4000);
    

  $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        }); 
 
        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });