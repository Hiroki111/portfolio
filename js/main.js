$(window).scroll(function() {
	if ($('.navbar').offset().top > 50) {
		console.log('if', $('.navbar').offset().top);
		$('.fixed-top').addClass('nav-collapse');
	} else {
		console.log('else', $('.navbar').offset().top);
		$('.fixed-top').removeClass('nav-collapse');
	}
})

$(function() {
	$('.page-scroll a').bind('click', function() {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});