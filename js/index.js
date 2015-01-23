
$('#down-arrow,#down-arrow1').on('click', function(e){
   e.preventDefault();
   var target=$('#section-2');
   $('html, body').stop().animate({
      scrollTop: target.offset().top
   }, 1000);
});
$("#button-ok").on("click" , function(e) {
    e.preventDefault();	
	var check = document.getElementById('email_validation').checkValidity();
	if (check==false)  {
		$('#text_wrap').show().delay(2000).fadeOut();
    }
	if(check==true){  
        $('#section-1content').hide();
		$('#section-1contentx').show();
	}	
	});
	$("#button-ok1").on("click" , function(event) {
    event.preventDefault();
    var check = document.getElementById('email_validation1').checkValidity();
	
	if (check==false)  {
		$('#text_wrap1').show().delay(2000).fadeOut();
	};
	if (check == true) {
		$('#section-4main').hide();
		$('#section-4mainx').show();
	};

});