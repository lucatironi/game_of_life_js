describe("A Board", function() {
  var board;

  it("must be defined", function() {
    expect(new Board()).toBeDefined();
  });

  it(".cells must have return a set of cells from a seed", function() {
    var cell = new Cell(true, 0, 0);
    expect(new Board([cell]).cells).toEqual([cell]);
    expect(new Board([cell]).cells[0]).toEqual(cell);
  });

  it(".cellAt() must return a cell at a given position", function() {
    expect(new Board([new Cell(false, 0, 0), new Cell(true, 1, 0), new Cell(false, 2, 0)]).cellAt(1, 0).isAlive()).toBeTruthy();
    expect(new Board([new Cell(false, 0, 0), new Cell(true, 1, 0), new Cell(false, 2, 0)]).cellAt(1, 0).coords()).toEqual({ x: 1, y: 0});
  });

  it(".tick() must evolve its cells every tick", function() {
    expect(new Board([new Cell(true, 0, 0)]).tick().cells[0].isAlive()).toBeFalsy();
  });

  it(".aliveNeighbours() must count the alive neighbours of a given position", function() {
    expect(new Board([new Cell(false, 0, 0), new Cell(true, 1, 0), new Cell(false, 2, 0),
                      new Cell(false, 0, 1), new Cell(true, 1, 1), new Cell(false, 2, 1),
                      new Cell(false, 0, 2), new Cell(true, 1, 2), new Cell(false, 2, 2)]).aliveNeighbours(1, 1)).toEqual(2);
    expect(new Board([new Cell(false, 0, 0), new Cell(true, 1, 0), new Cell(false, 2, 0),
                      new Cell(false, 0, 1), new Cell(true, 1, 1), new Cell(false, 2, 1),
                      new Cell(false, 0, 2), new Cell(true, 1, 2), new Cell(false, 2, 2)]).aliveNeighbours(1, 2)).toEqual(1);
  });

  it(".tick() must evolve its cells every tick according to their neighbours", function() {
    board = new Board([new Cell(false, 0, 0), new Cell(true, 1, 0), new Cell(false, 2, 0),
                       new Cell(false, 0, 1), new Cell(true, 1, 1), new Cell(false, 2, 1),
                       new Cell(false, 0, 2), new Cell(true, 1, 2), new Cell(false, 2, 2)]).tick();
    expect(board.cellAt(1, 0).isAlive()).toBeFalsy();
    expect(board.cellAt(0, 1).isAlive()).toBeTruthy();
    expect(board.cellAt(1, 1).isAlive()).toBeTruthy();
    expect(board.cellAt(2, 1).isAlive()).toBeTruthy();
    expect(board.cellAt(1, 2).isAlive()).toBeFalsy();
  });
});