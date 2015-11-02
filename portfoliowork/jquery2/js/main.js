

$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 4000);
    
    $(".vid").prop("muted", "muted");
	
    
    //Click & double click events with Popup window, Hide & Show
    $("#popup").click(function () {
        window.open("http://facebook.com", "_blank", "height=800, width=400");
    });
    $("#hide").click(function () {
        $(".interior").hide(500);
        $(".webdev").hide(500);
        $(".webdesign").hide(500);
    });
    $("#all").click(function () {
        $(".interior").show(1500);
        $(".webdesign").show(2000);
        $(".webdev").show(3000);
    });
    $("#wds").click(function () {
        $(".interior").hide(500);
        $(".webdev").hide(500);
        $(".webdesign").show(500);
    });
    $("#wdv").click(function () {
        $(".interior").hide(500);
        $(".webdesign").hide(500);
        $(".webdev").show(500);
    });
    
    
    
    //
    $(".interi").mouseenter(function () {
        $(this).hide(2000);
    });
    $(".webdesig").mousemove(function () {
        $(this).hide(2000);
    });
    $(".webde").mousedown(function(){
        $(this).hide(2000);
    });
   
     
     $("#bg").click(function () {
        $(".interi").show("slow");
        $(".webdesig").show("slow");
        $(".webde").show("slow");
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
    
    //password cheaker
    
        $("#password").keyup(function(){
        var count=$(this).val().length;
        // 
            $(".pass_strength").text(count);
        if(count<1){
           	$(".pass_strength").text("");
            	$(".pass_strength").removeClass("redd");        	$(".pass_strength").removeClass("orange");           	$(".pass_strength").removeClass("greenn");
        }
        else if(count<6){
            	$(".pass_strength").text("Weak");
            	$(".pass_strength").addClass("redd");
            	$(".pass_strength").removeClass("orangee");          	$(".pass_strength").removeClass("green");
        }
        else if(count<=10){
            	$(".pass_strength").text("Good");
            	$(".pass_strength").addClass("orangee");
           	$(".pass_strength").removeClass("redd");          	$(".pass_strength").removeClass("green");
        }
        else{
            	$(".pass_strength").text("Strong");
            	$(".pass_strength").addClass("greenn");
           	$(".pass_strength").removeClass("redd");                                           	$(".pass_strength").removeClass("orangee");
        }
    });
    
    //
    
     var color=$("#bgcolor").val();
    $("#bgcolor").css("background",color);
    
    $("#bgcolor").change(function(){
    color=$("#bgcolor").val();
    $("#bgcolor").css("background",color);
    });

    
    
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

//
       var max_text=100;
    $("#character_remaining").html("<b>"+max_text+" characters remaining.</b>");
    $("textarea").keyup(function(){
        var text_length=$("textarea").val().length;
        var total_character_remaining=max_text-text_length;
      $("#character_remaining").html("<b>"+total_character_remaining+" characters remaining.</b>");
    });


//
        $("#hideshow").click(function(){
        $(".toggle").toggle(4000);
    });

 //
        $("#up").click(function() {
        $("#slide1").slideUp(4000);
    });
    $("#down").click(function(){
        $("#slide1").slideDown(4000);
    });
    $("#slide_toggle").click(function(){
        $("#slide2").slideToggle(4000);
    });
    
    
  //
         $(".gallery_fade").css("opacity", "0.5");
    $(".gallery_fade").mouseover(function(){
        $(this).fadeTo(100, 1);
        $(".gallery_fade").not(this).fadeTo(100,0.5);
    });


});