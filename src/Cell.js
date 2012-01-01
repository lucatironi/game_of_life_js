function Cell(status, x, y) {
  this.status = status;
  this.x = x;
  this.y = y;
}

Cell.prototype.coords = function() {
  return { x: this.x, y: this.y };
}

Cell.prototype.isAlive = function() {
  return this.status;
}

Cell.prototype.evolve = function(neighbours) {
  if (this.isAlive()) {
    return new Cell(neighbours == 2 || neighbours == 3, this.x, this.y);
  } else {
    return new Cell(neighbours == 3, this.x, this.y);
  }
}