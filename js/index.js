
$('#down-arrow').on('click', function(e){
   e.preventDefault();
   var target=$('#section-2');
   $('html, body').stop().animate({
      scrollTop: target.offset().top
   }, 1000);
});
function validate(clicked_id)
{
    var e = $(clicked_id);
    var form = e.parent('form').get(0);
	var user_id =form.id;
	var check = document.getElementById(user_id).checkValidity();
	var errorboxid;
	if (clicked_id.id == "button-ok" ) {
		errorboxid = "text_wrap";
	}
	else{
		errorboxid = "text_wrap1";
	}
    
    if (check == false) {
		$('#'+errorboxid).show().delay(2000).fadeOut();
       
	}
	else{
		if (errorboxid=="text_wrap") {
       	  $('#section-1content').hide();
		  $('#section-1contentx').show();
        }
        else{
       	  $('#section-4main').hide();
		  $('#section-4mainx').show();
       }
   }

}

