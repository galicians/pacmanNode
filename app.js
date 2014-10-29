var cell = require('./game/cell.js')
var grid = require('./game/grid.js')
var pacman = require('./game/pacman.js')

var app = require('express')()
var http = require('http').Server(app);
// var net = require('net')
var io = require('socket.io')(http);

app.use(require('express').static(__dirname + '/public'));


app.set('view engine', 'ejs')

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('keydown', function(key) {console.log(key)})
});


app.get('/', function(request,response){

	console.log(request.method + ' ' + request.url)
	
	board = new grid.init
	board.factory(cell.init)
	var pac = new pacman.init
	pac.name = 'Nicolle'
	board.placing(pac, '4:6')
	response.render('index', board)
})

// app.get('*', function(request,response){
// 	console.log(request.method + ' ' + request.url)
// 	response.send("bad route")
// })


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