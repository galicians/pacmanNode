var express = require('express')
var app = express()

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

	console.log('listening on port 5000')})