<<<<<<< HEAD
$(document).ready(function (){
$('#down-arrow,#down-arrow1').on('click', function(e){
=======

$('#down-arrow').on('click', function(e){
>>>>>>> b278e5f0855add7d9c100f2b16510eda2504d59b
   e.preventDefault();
   var target=$('#section-2');
   $('html, body').stop().animate({
      scrollTop: target.offset().top
   }, 1000);
});
function validate(clicked_id)
{
	var check = document.getElementById(clicked_id.id).checkValidity();
	var errorboxid;
	
	if (clicked_id.id == "email_validation" ) {
		errorboxid = "text_wrap";
	}
	else{
		errorboxid = "text_wrap1";
	}
    if (check == false) {
    	$(".text").html("enter valid email");
		$('#'+errorboxid).show().delay(2000).fadeOut();
		return false;
       
	}
	var form = $('#email_validation');
	$.ajax({
	       type: 'GET',
	       url: '//us10.list-manage.com/subscribe/post-json?u=6e86c51ea42cc062099af08b0&id=3369562b9b&c=?',
	       data: form.serialize(),
	       cache : false,
	       dataType : 'json',
	       error: function(result) {
	       	debugger;
	       },
	       success : function(result) {
	       	console.log(result);
	       	var res = result.result;
	       	if (res == "error") {$(".text").html("already subscribed");$('#'+errorboxid).show().delay(2000).fadeOut();}
	       	else {	
	       	if (errorboxid=="text_wrap") {
				$('#section-1content').hide();
				$('#section-1contentx').show();
			}
			else{
				$('#section-4main').hide();
				$('#section-4mainx').show();
			}
		    } 
	       },
	       complete : function() { 
	       	debugger;
			
		}
	});
}

	var emailWidgetHtml = $("#content.LR-content").html();
	var timer = setInterval(function() {
		if($("#content.LR-content").html() !== emailWidgetHtml) {
			$(".LR-sign-up-input.signup-email").attr("placeholder", "Enter your email");
			clearInterval(timer);
		} else {
			//nothing to do
		}
	}, 50);
});
