window.onload = function() {
	var socket = io()
				socket.emit('keydown', function(data) { console.log(data) })
				socket.on('points', function(points) { } )
					
				
				
	document.addEventListener('keydown', function(event) {
	    if(event.keyCode == 37) {
	        socket.emit('keydown', function() { return "left" })
	    }
	    else if(event.keyCode == 38) {
	        socket.emit('keydown', function() { return "up" })
	    }
	     else if(event.keyCode == 39) {
	        socket.emit('keydown', function() { return "right" })
	    }
	     else if(event.keyCode == 39) {
	        socket.emit('keydown', function() { return "down" })
	    }
	});

	}