function GameOfLife(width, height, cellSize) {
  this.running = false;
  this.board = new Board();

  if (width === undefined) {
    this.width = 320;
  } else { this.width = width; }

  if (height === undefined) {
    this.height = 240;
  } else { this.height = height; }

  if (cellSize === undefined) {
    this.cellSize = 5;
  } else { this.cellSize = cellSize; }
}

GameOfLife.prototype.isRunning = function() {
  return this.running;
}

GameOfLife.prototype.run = function() {
  this.running = true;
}

GameOfLife.prototype.pause = function() {
  this.running = false;
}

GameOfLife.prototype.toggleRunning = function() {
  this.running = !this.running;
}

GameOfLife.prototype.setup = function() {
  this.pause();
  seed = [];
  for (var i = 0; i < this.width / this.cellSize; i++) {
    for (var j = 0; j < this.height / this.cellSize; j++) {
      status = Math.random();
      seed.push(new Cell(status < 0.1, i, j));
    }
  }
  this.board = new Board(seed);
}

GameOfLife.prototype.update = function() {
  if (this.isRunning()) {
    this.board = this.board.tick();
  }
}

GameOfLife.prototype.draw = function() {
  jaws.clear();
  for(var i = 0; i < this.board.cells.length; i++ ) {
    cell = this.board.cells[i];
    if (cell.isAlive()) {
      jaws.context.fillStyle = "black"
      jaws.context.fillRect(cell.x * this.cellSize, cell.y * this.cellSize, this.cellSize, this.cellSize);
    }
  }
}