$(window).scroll(function() {
	if ($('.navbar').offset().top > 50) {
		$('.fixed-top').addClass('nav-collapse');
	} else {
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

	$('.learn-more-btn').bind('click', function() {
		var imgSrc = $(this).closest(".work-container").find('.work-img').attr('src');
		$('#modal-img').attr("src", imgSrc);

		var description = $(this).closest(".work-hover-div").find('.work-description').clone();
		$('#modal-work-description').html(description);

		var url = $(this).closest(".work-hover-div").find('.site-url').attr('data-url');
		$('#modal-site-url').attr("href", url);
	});
});