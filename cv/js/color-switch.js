$(function(){
/********************************************************
 *
 *  Color Switch Javascript code for Themes Forever
 *  Written by themesforever.com
 *  //// Can be removed in production ////
 *
 *******************************************************/

  /*
   *  Styles CSS
   */
  $('#block-switch').css({
    'background'    : '#099',
    'border-radius' : '0 0 5px 0',
    'left'          : '-52px',
    'position'      : 'fixed',
    'top'           : '20px',
    'width'         : '52px',
    'z-index'       : '1500'
  });
  
  $('#block-switch').fadeIn('fast');

  $('#block-switch span#gear').css({
    'background'    : '#099',
    'border-radius' : '0 5px 5px 0',
    'color'         : '#fff',
    'cursor'        : 'pointer',
    'display'       : 'block',
    'font-size'     : '26px',
    'height'        : '52px',
    'line-height'   : '52px',
    'padding'       : '0',
    'position'      : 'absolute',
    'text-align'    : 'center',
    'top'           : '0',
    'width'         : '52px',
    'right'         : '-52px'
  });

  $('#block-switch #block-color span').css({
    'border-radius' : '16px',
    'cursor'        : 'pointer',
    'display'       : 'block',
    'height'        : '32px',
    'margin'        : '10px',
    'width'         : '32px'
  });

  $('#block-color span').each( function() {
    var background = $(this).data('color');
    console.log(background);
    $(this).css({ 'background'  : '#' + background });  
  });

  $('#block-color span').click(function(){
      var id = $(this).attr('id');
      $('#color-switch').attr('href', 'css/simpleness-' + id + '.css');
  });

  var toggle = false;

  $('#gear').click(function(){

    if(toggle)
    {
      $('#block-switch').animate({ left: '-52px'}, 500);
      toggle = false;
    }
    else
    {
      $('#block-switch').animate({ left: 0}, 500);
      toggle = true;
    }

  });

});