

// $('.cell').each(function(cell) { if ($(this).html() == 'pacman') $('#yellowPacman').appendTo(($this)) })
// $('.cell').html('<img src="/pacman.png">')
// $('.cell').each(function() { if($(this).innerText == 'pacman') {
// 	console.log("inside pacman")
// 	$('this').html('<img src="/pacman.png">') }
// })
$('.cell').each( function() { if ($(this).html() == 'pacman') {
	$(this).html('<img src="pacman.png" height="24.25px" width="24.25px">') }
	else {
		$(this).css('background-color', 'black')
	}
})




// $('#yellowPacman').appendTo($('.cell')[0])
$('.cell').css('background-color', 'black')
// $('.cell:contains('pacman')').css('background-image', )