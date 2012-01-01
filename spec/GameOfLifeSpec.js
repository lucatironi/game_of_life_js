describe("A Game Of Life", function() {

  it("must be defined", function() {
    expect(new GameOfLife()).toBeDefined();
  });

  it("must not be running when created", function() {
    expect(new GameOfLife().isRunning()).toBeFalsy();
  });

  describe("has a width and a height", function() {
    it("that have a default value", function() {
      expect(new GameOfLife().width).toEqual(320);
      expect(new GameOfLife().height).toEqual(240);
    });

    it("that can be set with a given value", function() {
      expect(new GameOfLife(640, 480).width).toEqual(640);
      expect(new GameOfLife(640, 480).height).toEqual(480);
    });
  });

  describe("has Cell size", function() {
    it("that has a default value", function() {
      expect(new GameOfLife().cellSize).toEqual(5);
    });

    it("that can be set with a given value", function() {
      expect(new GameOfLife(640, 480, 10).cellSize).toEqual(10);
    });
  });

  it(".run() must start running", function() {
    game = new GameOfLife();
    game.run();
    expect(game.isRunning()).toBeTruthy();
  });

  it(".pause() must pause running", function() {
    game = new GameOfLife();
    game.pause();
    expect(game.isRunning()).toBeFalsy();
  });

  it(".toggleRunning() must toggle between running and not running", function() {
    game = new GameOfLife();
    expect(game.isRunning()).toBeFalsy();
    game.toggleRunning();
    expect(game.isRunning()).toBeTruthy();
    game.toggleRunning();
    expect(game.isRunning()).toBeFalsy();
  });


  describe(".board", function() {
    it("must have a board", function() {
      expect(new GameOfLife().board).toBeDefined();
    });
  });

  describe(".setup() must setup the board", function() {
    it("populating with a random seed", function() {
      var game = new GameOfLife();
      game.setup();
      expect(game.board.cells.length).not.toEqual(0);
    });

    it("according to the given width, height and cell size", function() {
      var game = new GameOfLife(5, 5, 1);
      game.setup();
      expect(game.board.cells.length).toEqual(25);
    });
  });

  it(".update() must update the board when running", function() {
    var game = new GameOfLife(3, 3, 1);
    game.setup();
    before_board = game.board;
    game.run();
    game.update();
    after_board = game.board;
    expect(before_board).not.toEqual(after_board);
  });

  it(".update() must not update the board when not running", function() {
    var game = new GameOfLife(3, 3, 1);
    game.setup();
    before_board = game.board;
    game.update();
    after_board = game.board;
    expect(before_board).toEqual(after_board);
  });
});