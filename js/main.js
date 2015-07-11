$(document).ready(function () {
   $("#projects-bar").click(function () {
    $(".projects").fadeToggle(1000);
    $("#projects-bar").toggleClass("projectbold");
	});
});

// DOWNLOAD FADER

$(document).ready(function() {
	$(".cv-download-box").hover(function() {
		$(".fa-cloud-download").fadeToggle(500)
	});
});

// THUMBNAIL CHANGER
$(document).ready(function() {
$(".thumbnails img").click(function() {
    $("#fullscreen").attr("src", $(this).attr("src"));
	});
});

// FURTHER DETAILS 

$(document).ready(function() {
	$(".fa-caret-down").click(function() {
		$(".further-details").stop(true, true).fadeToggle(1000)
	});
});


function nextImage() {

					var current_image 			 = $("#fullscreen").attr("src");
					var current_image_thumbnail  = $('.thumbnails img[src="'+current_image+'"]');
					var next_image_thumbnail     = $(current_image_thumbnail).next();
					

					document.getElementById("fullscreen").src = next_image_thumbnail.attr("src");
					$(".next, .prev").stop(true, true).fadeOut(10).stop(true, true);

					
					var right_edge_icon = $(".feature-image img").width() + $(".feature-image img").offset().left;
					var left_edge_icon  = $(".feature-image img").offset().left;

					
					if (next_image_thumbnail.next().length) {				
						$(".next").css({"left":+right_edge_icon+"px"});
						var real_right_edge = right_edge_icon - ($(".next").width()/2);
						$(".next").css({"left":+real_right_edge+"px"});
						$(".next").stop(true, true).fadeIn(1000);
					}

					if (next_image_thumbnail.prev().length) {
						$(".prev").css({"left":+left_edge_icon+"px"});
						var real_left_edge = left_edge_icon - ($(".prev").width()) - 22;
						$(".prev").css({"left":+real_left_edge+"px"});
						$(".prev").stop(true, true).fadeIn(1000);
					}
}		

function prevImage() {	

					var current_image 			 = $("#fullscreen").attr("src");
					var current_image_thumbnail  = $('.thumbnails img[src="'+current_image+'"]');
					var prev_image_thumbnail     = $(current_image_thumbnail).prev();

					document.getElementById("fullscreen").src = prev_image_thumbnail.attr("src");
					$(".prev, .next").stop(true, true).fadeOut(10).stop(true, true);

					var right_edge_icon = $(".feature-image img").width() + $(".feature-image img").offset().left;
					var left_edge_icon  = $(".feature-image img").offset().left;

					if (prev_image_thumbnail.prev().length) {
						$(".prev").css({"left":+left_edge_icon+"px"});
						var real_left_edge = left_edge_icon - ($(".prev").width()) - 22;
						$(".prev").css({"left":+real_left_edge+"px"});
						$(".prev").stop(true, true).fadeIn(400);

					}
					if (prev_image_thumbnail.next().length) {
						$(".next").css({"left":+right_edge_icon+"px"});
						var real_right_edge = right_edge_icon - ($(".next").width()/2);
						$(".next").css({"left":+real_right_edge+"px"});
						$(".next").stop(true, true).fadeIn(1000);
					}
}

$(document).ready(function() {
	// upon hovering into image area
	$(".feature-image").mouseenter(function () {
		// set image + sizes
		var current_image 			 = $("#fullscreen").attr("src");
		var current_image_thumbnail  = $('.thumbnails img[src="'+current_image+'"]');
		var left_edge_icon			 = $(".feature-image img").offset().left;
		var right_edge_icon 		 = $(".feature-image img").width() + $(".feature-image img").offset().left;

		// NEXT
		if ($(current_image_thumbnail).next().length) {
			$(".next").css({"left":+right_edge_icon+"px"});
			var real_right_edge = right_edge_icon - ($(".next").width()/2);
			$(".next").css({"left":+real_right_edge+"px"});
			$(".next").stop(true, true).fadeIn(1000);
			}
		// PREV
		if ($(current_image_thumbnail).prev().length) {
			$(".prev").css({"left":+left_edge_icon+"px"});
			var real_left_edge = left_edge_icon - ($(".prev").width()) - 22 ;
			$(".prev").css({"left":+real_left_edge+"px"});
			$(".prev").stop(true, true).fadeIn(500);
		} 
	}).mouseleave(function() {
		$(".next, .prev").stop(true, true).fadeOut(200).stop(true, true);
	});
});










