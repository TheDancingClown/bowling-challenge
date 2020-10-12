describe("Bowling", function() {
  let game;

  beforeEach(function() {
    game = new Game();
  });

  describe('pinsHit', function() {
    it('returns the number of pins knocked down', function() {
      expect(game.pinsHit(5)).toEqual(5)
    })
  })

  describe('firstRoll', function() {
    it('adds the pins hit to a frame array', function() {
      game.firstRoll(4)
      expect(game.framePins).toEqual([4])
    })
    it('stores an X for a strike', function() {
      game.firstRoll(10)
      expect(game.framePins).toEqual(['X'])
    })
  })

  describe('strike', function() {
    it('checks if 10 pins hit is a strike', function() {
      game.pinsHit(10)
      expect(game.strike()).toBe(true)
    })
    it('checks whether 7 pins hit is not a strike', function() {
      game.pinsHit(7)
      expect(game.strike()).toBe(false)
    })
  })

  describe('secondRoll', function() {
    it('adds the pins hit to a frame array', function() {
      game.firstRoll(4)
      game.secondRoll(5)
      expect(game.framePins).toEqual([4,5])
    })
    it('stores a / for a strike', function() {
      game.firstRoll(4)
      game.secondRoll(6)
      expect(game.framePins).toEqual([4,'/'])
    })
  })

  describe('spare', function() {
    it('checks if 2 rolls that add to 10 is a spare', function() {
      game.pinsHit(6)
      expect(game.spare(4)).toBe(true)
    })
    it('checks if 2 rolls that do not add to 10 is not a spare', function() {
      game.pinsHit(6)
      expect(game.spare(3)).toBe(false)
    })
  })

  describe('endFrame', function() {
    it('adds the frame rolls to a game array', function() {
      game.firstRoll(3)
      game.secondRoll(5)
      game.endFrame()
      expect(game.framePins).toEqual([])
      expect(game.rollDisplay).toEqual([[3,5]])
    })
  })

  describe('frameIncrease', function() {
    it('increments the frame counter', function() {
      game.frameIncrease()
      expect(game.frameCount).toEqual(1)
    })
  })

  describe('finalFrame', function() {
    it('checks if the final frame', function() {
      for(i = 0; i < 8; i ++) {
        game.frameIncrease()
      }
      expect(game.finalFrame()).toBe(false)
      game.frameIncrease()
      expect(game.finalFrame()).toBe(true)
    })
  })

  describe('addStrikeBonus', function() {
    it('adds a bonus to the strike array', function() {
      game.addStrikeBonus(5)
      expect(game.strikeBonus).toEqual([5])
    })
  })

  describe('addSpareBonus', function() {
    it('adds a bonus to the spare array', function() {
      game.addSpareBonus(4)
      expect(game.spareBonus).toEqual([4])
    })
  })
})