var cell = require('./game/cell.js')
var grid = require('./game/grid.js')
var pacman = require('./game/pacman.js')

var app = require('express')()
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(require('express').static(__dirname + '/public'));

var onlinePacmans = []
app.set('view engine', 'ejs')

board = new grid.init
	board.factory(cell.init)
	var pac = new pacman.init
	pac.name = 'Nicolle'
	board.placing(pac, '4:6')


var clients = {}
var usersConnected = 0



io.on('connection', function(socket){

  	 
  	 if (clients[socket.handshake['address']] == undefined) {
  	 	clients[socket.handshake['address']] = socket
  	 	newPacmanJoinsGame(socket)
  	 	console.log("new pacman created at position: ", newPlayer.currentCell)
  	 	console.log(socket.handshake['address'])
  	 	usersConnected += 1
  	 }
 

	
	console.log("Number of users connected", usersConnected)

	
	function newPacmanJoinsGame(socket) {
		newPlayer = new pacman.init(socket)
		randomRow = Math.floor(1 + Math.random() * 29).toString()
		randomColumn = Math.floor(1 + Math.random() * 29).toString()
		startingPoint = randomRow + ':' + randomColumn
		board.placing(newPlayer, startingPoint )
		console.log('inside of create pacman')
	}

	


  socket.on('keydown', function(event) {
  	console.log('inside of keydwon')
  	 console.log(event)
  	 newPlayer.move(event)
  	 console.log(newPlayer.currentCell)
  })
  
})



app.get('/', function(request,response){

	console.log(request.method + ' ' + request.url)
	
	// board = new grid.init
	// board.factory(cell.init)
	// var pac = new pacman.init
	// pac.name = 'Nicolle'
	// board.placing(pac, '4:6')
	response.render('index', board)
})

app.get('*', function(request,response){
	console.log(request.method + ' ' + request.url)
	response.send("bad route")
})


http.listen(5000, function() { 
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