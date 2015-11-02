

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  
     particleground(document.getElementById('partic'), {
    dotColor: '#86B404',
    lineColor: '#86B404'
  });
  
   particleground(document.getElementById('parti'), {
    dotColor: '#B18904',
    lineColor: '#B18904'
  }); 
    particleground(document.getElementById('part'), {
    dotColor: '#886A08',
    lineColor: '#886A08'
  });   
    particleground(document.getElementById('part5'), {
    dotColor: '#585858',
    lineColor: '#585858'
  }); 
    particleground(document.getElementById('part6'), {
    dotColor: '#64FFAA',
    lineColor: '#64FFAA'
  });
    particleground(document.getElementById('part7'), {
    dotColor: '#81D7FF',
    lineColor: '#81D7FF'
  });    
}, false);


//animated text
$('.tlt').textillate({ in: { effect: 'rollIn' } });
$('.title').textillate({
  loop: true,
  in: { effect: 'tada' }, 
  out: { effect: 'flipOutY' }
});

//..........MAIN.............

//add or remove textbox
var counter = 2;
		
    $("#addButton").click(function () {
				
	if(counter>10){
            alert("Only 10 textboxes allow");
            return false;
	}   
		
	var newTextBoxDiv = $(document.createElement('div'))
	     .attr("id", 'TextBoxDiv' + counter);
                
	newTextBoxDiv.after().html('<label>Textbox #'+ counter + ' : </label>' +
	      '<input type="text" name="textbox' + counter + 
	      '" id="textbox' + counter + '" value="" >');
            
	newTextBoxDiv.appendTo("#TextBoxesGroup");

				
	counter++;
     });

     $("#removeButton").click(function () {
	if(counter==1){
          alert("No more textbox to remove");
          return false;
       }   
        
	counter--;
			
        $("#TextBoxDiv" + counter).remove();
			
     });
		
     $("#getButtonValue").click(function () {
		
	var msg = '';
	for(i=1; i<counter; i++){
   	  msg += "\n Textbox #" + i + " : " + $('#textbox' + i).val();
	}
    	  alert(msg);
     });
 
//...................animated...............
$("#btn1").click(function(){
        $("#box").animate({height: "300px"});
    });
    $("#btn2").click(function(){
        $("#box").animate({height: "100px"});
    });

//.............press enter...............
$('#textbox').keypress(function(event){
	
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		alert('You pressed a "enter" key in textbox');	
	}
	event.stopPropagation();
});

$(document).keypress(function(event){
	
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		alert('You pressed a "enter" key in somewhere');	
	}
	
});

//............clone.......
 $("#reset").click(function () {
	  location.reload();
    });
	
    $("#cloneButton1").click(function () {
		
	  $('.smallBox').clone().insertAfter(".smallBox");
	  
    });
	
//.............cut -copy-paste

 
	$("#textA").bind('copy', function() {
            $('span').text('copy behaviour detected!')
        });	
        $("#textA").bind('paste', function() {
            $('span').text('paste behaviour detected!')
        });	
        $("#textA").bind('cut', function() {
            $('span').text('cut behaviour detected!')
        });
//*******

$("#prepend").click(function () {
		
	  $('.box').prepend("<div class='newbox'>I'm new box by prepend</div>");
	  
    });
	
    $("#prependTo").click(function () {
		
	  $("<div class='newbox'>I'm new box by prependTo</div>").prependTo('.box');
	  
    });
    
    $("#append").click(function () {
		
	  $('.box').append("<div class='newbox'>I'm new box by append</div>");
	  
    });
    
    $("#appendTo").click(function () {
		
	  $("<div class='newbox'>I'm new box by appendTo</div>").appendTo('.box');
	  
    });
	
    $("#reset").click(function () {
	  location.reload();
    });
	
//..............
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