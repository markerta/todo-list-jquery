
// Toggle completion by clicking on to-do
$('ul').on('click', 'li', function() {
	$(this).toggleClass("completed");
});

// Clicking delete button, fades out to-do and removes to-do
$('ul').on('click', 'span', function(e) {
	$(this).parent().fadeOut(function() {
		$(this).remove();
	});
	e.stopPropagation();
});

// add inputted to-do when enter key pressed
$("input[type='text']").keypress(function(e) {
	if(e.which === 13) {
		var todo = $(this).val();
		$('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + todo + '</li>');
		$(this).val('');
	}
});

// toggle to-do insertion
$('.fa-plus').on('click', function() {
	$("input[type='text']").fadeToggle();
});