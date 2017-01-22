$(function(e) {
	var x = document.documentElement.clientHeight;
	var y = e(".header").outerHeight();
	e("#parallax_wrapper").css("height", x - y + "px");
	e("#parallax_wrapper").css("left", 50 + "%");
});