var express = require('express')
var app = express()
var cell = require('./game/cell.js')
var grid = require('./game/grid.js')
var pacman = require('./game/pacman.js')
app.set('view engine', 'ejs')

// var routes = require('./routes')


app.get('/', function(request,response){

	console.log(request.method + ' ' + request.url)
	response.render('index')
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
	board.placing(pac, '4:6')
	console.log(pac.currentCell)
	pac.move('down')
	console.log(pac.currentCell)

	console.log('listening on port 5000')})