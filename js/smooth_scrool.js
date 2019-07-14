/*	
 *	smooth_scroll.js
 *	-Smooth scroll for top / bottom arrows
 *  credit to Foxxy
 */

$(document).on('ready', function() {
	if(active_page == "thread") {
	
		$duration = 1000;

		$("a[href='#top']").on("click", function(e) {
		  e.preventDefault();
		  $("html, body").stop().animate({ scrollTop: 0 }, $duration);
		});

		$("a[href='#bottom']").on("click", function(e) {
		  e.preventDefault();
		  $("html, body").stop().animate({ scrollTop: $(document).height()-$(window).height() }, $duration);
		});
	}
});
