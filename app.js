var express = require('express')
var app = express()
var http = require('http').Server(app);
var cell = require('./game/cell.js')
var grid = require('./game/grid.js')
var pacman = require('./game/pacman.js')
app.set('view engine', 'ejs')
var net = require('net')
var io = require('socket.io')(http);
// var routes = require('./routes')

// var sockets = []


io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

})

app.get('/', function(request,response){

// 	socket = new net.Socket({ fd: null
//   allowHalfOpen: false,
//   readable: false,
//   writable: false
// })
// 	// sockets.push(socket)
	// var client = net.connect({port: 5000}, function() { console.log('client.connected')})
	

	// socket.on('data', function(d) {
	// 	for( var i = 0; i < sockets.length; i++) { sockets[i].write(d)
	// 		console.log(d)
	// 		console.log(sockets.length)
	// 		console.log(socket.write(d))
	// 	}
		
	// })


	console.log(request.method + ' ' + request.url)
	
	board = new grid.init
	board.factory(cell.init)
	var pac = new pacman.init
	pac.name = 'Nicolle'
	board.placing(pac, '4:6')
	response.render('index', board)
})

app.get('*', function(request,response){
	console.log(request.method + ' ' + request.url)
	response.send("bad route")
})


app.listen(5000, function() { 
	var c = new cell.init
	console.log(c)
	console.log(c.isAvailable)
	c.changeContent("im a cell")
	console.log(c.content)
	console.log("----------board")
	var board = new grid.init
	console.log(board.size)
	board.factory(cell.init)
	console.log(board)

	console.log("----------pacman")
	var pac = new pacman.init
	pac.name = "Nicolle"
	board.placing(pac, '4:6')
	console.log(board['4:6'].content.name)
	console.log(board['4:6'].content.constructor.name)
	console.log(pac.currentCell)
	pac.move('down')
	console.log(pac.currentCell)

	console.log('listening on port 5000')})