if(window.active_page == 'thread' || window.active_page == 'index') {
	$(document).ready(function() {
		function appendButton($post) {
			$copyButton = "<a href='javascript:void(0)' class='copy_to_clipboard' title='Copy hotlink to this post'><i class='fa fa-files-o' aria-hidden='true'></i></a>";
			$post.find(".post_no").first().next().after($copyButton);
		}
		function addClipboardEvents($sel) {
			$sel.on("click", function() {
				$board = window.board_name;
				$postNumber = $(this).prevAll(".post_no").first().text();
				$(this).append("<textarea id='clipboard_textarea' style='width:0; height:0;'>>>>/" + $board + "/" + $postNumber + "\n</textarea>");
				$("#clipboard_textarea").select();
				try {
					document.execCommand('copy');
				} catch (err) {
					console.log(err);
				}
				$("#clipboard_textarea").remove();
			});
		}
	
		$supported = document.queryCommandSupported("copy");
		if($supported) {
			$(".intro").each(function() {
				appendButton($(this));
			});

			$(document).on('new_post', function(e, post) {
				appendButton($(post));
				$clipboard = $(post).find(".copy_to_clipboard").first();
				addClipboardEvents($clipboard);
			});
	
			addClipboardEvents($(".copy_to_clipboard"));
		}
	});
}
