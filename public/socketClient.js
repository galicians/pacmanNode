window.onload = function() {
	var socket = io()
				// socket.emit('keydown', function(data) { console.log(data) })
				socket.on('points', function(points) { } )
					
				
				
	document.addEventListener('keydown', function(event) {
	   socket.emit('keydown', keyCodeToString(event.keyCode) )
	});

	}

		function keyCodeToString(keyCode) {
			var keys = [37, 38, 39, 40]
			if (keyCode === 37) return 'left'
			if (keyCode === 38) return 'up'
			if (keyCode === 39) return 'right'
			if (keyCode === 40) return 'down'
		}

function updateGrid() {

// 	$('.cell').each( function() { if ($(this).html() == 'pacman') {
// 	$(this).html('<img src="pacman.png" height="24.25px" width="24.25px">') }
// 	else {
// 		$(this).css('background-color', 'black')
// 	}
// })

// }