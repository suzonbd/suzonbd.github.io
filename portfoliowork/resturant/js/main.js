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




