
$('#down-arrow,#down-arrow1').on('click', function(e){
   e.preventDefault();
   var target=$('#section-2');
   $('html, body').stop().animate({
      scrollTop: target.offset().top
   }, 1000);
});
function validate(clicked_id)
{

	var user_id =$('form').attr('id')
	var check = document.getElementById(user_id).checkValidity();
	var errorboxid;
	var sectionid;
	if (clicked_id == "button-ok" ) {
		errorboxid = "text_wrap";
        // sectionid = "section-4main";
        // sectionidx="section-4mainx";
	}
	else{
		errorboxid = "text_wrap1";
	}
    if (check == false) {
		$('#'+errorboxid).show().delay(2000).fadeOut();
	}
}



// $("#clicked_id").on("click" , function(e) {
//     e.preventDefault();	
// 	var check = document.getElementById('email_validation').checkValidity();
// 	if (check==false)  {
// 		$('#text_wrap').show().delay(2000).fadeOut();
//     }
// 	if(check==true){  
//         $('#section-1content').hide();
// 		$('#section-1contentx').show();
// 	}	
// 	});
// 	$("#button-ok1").on("click" , function(event) {
//     event.preventDefault();
//     var check = document.getElementById('email_validation1').checkValidity();
	
// 	if (check==false)  {
// 		$('#text_wrap1').show().delay(2000).fadeOut();
// 	};
// 	if (check == true) {
// 		$('#section-4main').hide();
// 		$('#section-4mainx').show();
// 	};

// });