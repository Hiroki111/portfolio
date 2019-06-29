$(window).scroll(function() { $(".navbar").offset().top > 50 ? $(".fixed-top").addClass("nav-collapse") : $(".fixed-top").removeClass("nav-collapse") }), $(function() { $(".page-scroll a").bind("click", function() { var t = $(this);
		$("html, body").stop().animate({ scrollTop: $(t.attr("href")).offset().top }, 1500, "easeInOutExpo"), event.preventDefault() }), $(".learn-more-btn").bind("click", function() { var t = $(this).closest(".work-container").find(".work-img").attr("src");
		$("#modal-img").attr("src", t); var o = $(this).closest(".work-hover-div").find(".work-description").clone();
		$("#modal-work-description").html(o); var r = $(this).closest(".work-hover-div").find(".site-url").attr("data-url");
		$("#modal-site-url").attr("href", r) }) });