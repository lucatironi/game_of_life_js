function Board(seed) {
  this.cells = seed;
}

Board.prototype.cellAt = function(x, y) {
  var cell = null;
  for (var i = 0; i < this.cells.length; i++) {
    if (this.cells[i].x == x && this.cells[i].y == y) {
      cell = this.cells[i];
    }
  }
  return cell;
}

Board.prototype.tick = function() {
  var new_seed = [];
  for (var i = 0; i < this.cells.length; i++) {
    new_seed.push(this.cells[i].evolve(this.aliveNeighbours(this.cells[i].x, this.cells[i].y)));
  }
  return new Board(new_seed);
}

Board.prototype.aliveNeighbours = function(x, y) {
  var count, i, cell;
  for (count = 0, i = 0; i < this.cells.length; i++) {
    cell = this.cells[i];
    if (cell.isAlive() &&
      ((cell.x == x   && cell.y == y-1 ) || //N
       (cell.x == x+1 && cell.y == y-1 ) || //NE
       (cell.x == x+1 && cell.y == y   ) || //E
       (cell.x == x+1 && cell.y == y+1 ) || //SE
       (cell.x == x   && cell.y == y+1 ) || //S
       (cell.x == x-1 && cell.y == y+1 ) || //SW
       (cell.x == x-1 && cell.y == y   ) || //W
       (cell.x == x-1 && cell.y == y-1 ))) { //NW
      count++;
    }
  }
  return count;
}