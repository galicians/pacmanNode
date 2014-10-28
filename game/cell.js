function Cell() {
	this.content
	this.isAvailable = true

}

Cell.prototype.changeContent = function(obj) {
	if (this.isAvailable) {
		this.content = obj
		this.isAvailable = false}
}


