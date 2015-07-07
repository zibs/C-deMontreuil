$(function () { $('.expander').simpleexpand(); }); 	
 
function lightboxer () {
document.getElementById('screen-show').click();

}

$(document).ready(function () {
   $("#projects-bar").click(function () {
    $(".projects").fadeToggle(1000);
    $("#projects-bar").toggleClass("projectbold");
	});
});



$(document).ready(function() {
	$(".cv-download-box").hover(function() {
		$(".fa-cloud-download").fadeToggle(500)
	});
});
