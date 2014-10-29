window.onload = function() {
	alert("client sockets loading")
	var socket = io()
				socket.emit('keydown', function() { console.log("down") })
				socket.on('points', function(points) {
					console.log(points)
				})
				
	document.addEventListener('keydown', function(event) {
	    if(event.keyCode == 37) {
	    	alert("its the socket loading")
	        socket.emit('keydown', function() { return "down" })
	    }
	    else if(event.keyCode == 39) {
	        socket.emit('keydown', function() { console.log("down") })
	    }
	});

	}