var pacman = exports = module.exports = {}

pacman.init = function(socket) {
	this.currentCell
	this.move = pacman.move
	this.name = 'pacman'
	this.user
	if(typeof(socket)==='undefined') this.user="anonymous";
}

pacman.move = function(keyDirection) {
 	var row = parseInt(this.currentCell.substring(0,this.currentCell.indexOf(':')))
	var column = parseInt(this.currentCell.substring(this.currentCell.indexOf(':') + 1,this.currentCell.length))
	
	if(keyDirection == "down" && row > 1)
	{
		this.currentCell = (row - 1).toString() + ':' + column.toString()
	}

	if(keyDirection == "up" && row < 30)
	{
		this.currentCell = (row + 1).toString() + ':' + column.toString()
	}
	if(keyDirection == "left" &&  column > 1)
	{
		this.currentCell = row.toString() + ':' + (column - 1).toString()
	}
	if(keyDirection == "right" && column < 30)
	{
		this.currentCell = row.toString() + ':' + (column + 1).toString()
	}
	
}
