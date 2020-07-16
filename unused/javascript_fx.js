// Project-Lightspeed images
$(document).ready(function() {
	$("#project-lightspeed-fx").mouseenter(function() {
		$("img.hyde, img.ilya").fadeIn();
	});
});

$(document).ready(function() {
	$("#project-lightspeed-fx").mouseleave(function() {
		$("img.hyde, img.ilya").fadeOut();
	});
});