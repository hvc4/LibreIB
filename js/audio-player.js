/*
 *	audio-player.js
 *	- Inline player for MP3 files
 *
 */


if(window.active_page == 'thread' || window.active_page == 'index' || window.active_page == 'ukko') {
	function addPlayer($thumb) {
		$src = $thumb.attr("href");
		if(!$thumb.next().is("audio")) {
			$thumb.parent(".file").css("float","left");
			$player = "<audio controls autoplay style='display:block; width:100%; max-width:265px; padding-left:5px;'><source src='" + $src + "' type='audio/mpeg'>Your browser does not support the audio element.</audio>";
			$thumb.after($player);
		} else {
			if($thumb.next()[0].paused)
				$thumb.next()[0].play();
			else
				$thumb.next()[0].pause();
		}
	}

	$(document).ready(function() {
		$(".audio-file").on("click", function(e) {
			e.preventDefault();
			addPlayer($(this));
		});

		$(document).on('new_post', function(e, post) {
			$(post).find(".audio-file").on("click", function(e) {
				e.preventDefault();
				addPlayer($(this));
			});
		});
	});
}
