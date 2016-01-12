//Color Changer
$(document).ready(function() { 
	$("#colors_body").on('click','a',function() { 
		$("link.color").attr("href",$(this).attr('rel'));
		return false;
	});
});
