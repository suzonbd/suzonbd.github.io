jQuery(document).ready(function($) {


  //Sticky Navigation
  
  $(".main-nav").sticky({ topSpacing: 0 });

  //Responsive Nav
  $('.nav a.colapse-menu1').click(function () { $(".navbar-collapse").collapse("hide") });
  $('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); }); 


});
