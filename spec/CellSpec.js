describe("A Cell", function() {
  var cell;

  it("must be defined", function() {
    expect(new Cell()).toBeDefined();
  });

  it("must have and return x & y coordinates", function() {
    expect(new Cell(true, 0, 0).coords()).toEqual({ x: 0, y: 0});
    expect(new Cell(true, 1, 1).coords()).toEqual({ x: 1, y: 1});
    expect(new Cell(true, 1, 2).x).toEqual(1);
    expect(new Cell(true, 1, 3).y).toEqual(3);
  });

  it("must pass its coordinates while evolving", function() {
    expect(new Cell(true, 1, 1).evolve().coords()).toEqual({ x: 1, y: 1});
  });

  describe("can be a live Cell", function() {

    beforeEach(function() {
      cell = new Cell(true);
    });

    it("must be alive on creation", function() {
      expect(cell.isAlive()).toBeTruthy();
    });

    describe(".evolve()", function() {
      it("must evolve", function() {
        expect(cell.evolve().isAlive()).toBeFalsy();
      });

      it("must die without neighbours", function() {
        expect(cell.evolve(0).isAlive()).toBeFalsy();
      });

      it("must die with less than 2 neighbours", function() {
        expect(cell.evolve(1).isAlive()).toBeFalsy();
      });

      it("must live to the next generation with 2 neighbours", function() {
        expect(cell.evolve(2).isAlive()).toBeTruthy();
      });

      it("must live to the next generation with 3 neighbours", function() {
        expect(cell.evolve(3).isAlive()).toBeTruthy();
      });

      it("must die with more than 3 neighbours", function() {
        expect(cell.evolve(4).isAlive()).toBeFalsy();
      });
    });
  });

  describe("can be a dead Cell", function() {

    beforeEach(function() {
      cell = new Cell(false);
    });

    it("must be dead on creation", function() {
      expect(cell.isAlive()).toBeFalsy();
    });

    describe(".evolve()", function() {
      it("must evolve", function() {
        expect(cell.evolve().isAlive()).toBeFalsy();
      });

      it("must remain dead with less than 3 neighbours", function() {
        expect(cell.evolve(2).isAlive()).toBeFalsy();
      });

      it("must come to live with exactly 3 neighbours", function() {
        expect(cell.evolve(3).isAlive()).toBeTruthy();
      });

      it("must remain dead with more than 4 neighbours", function() {
        expect(cell.evolve(4).isAlive()).toBeFalsy();
      });
    });
  });
});