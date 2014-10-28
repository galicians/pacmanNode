function Grid() {
	DEFAULT_SIZE = 900
	this.size = DEFAULT_SIZE
}

Grid.prototype.factory = function(object) {
	for(var i = 1; i < 31; i++) {
		for(var j = 1; j < 31; j++) {
			console.log(i + ':' + j)
			this[i + ':' + j] = new object
		}
	}
}

Grid.prototype.placing = function(object,position) {
	if (this[position].isAvailable) {
	this[position].changeContent(object)
	object.currentCell = position }
}
