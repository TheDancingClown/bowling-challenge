describe("Bowling", function() {
  let game;

  beforeEach(function() {
    game = new Bowling();
  });
  
  describe('roll', function() {
    it("adds a roll score to the frame", function() {
      game.roll(4);
      expect(game.frame_rolls).toEqual([4]);
    });
    it("adds a second roll to the frame", function() {
      game.roll(4)
      game.roll(3);
      expect(game.frame_rolls).toEqual([4,3]);
    })
    // it('stores the rolls per frames', function() {
    //   for (i = 0; i < 4; i++) {
    //     game.roll(10); 
    //   }
    //   expect(game.roll_display).toEqual([[10],[10],[10],[10]])
    // })
  });

  describe('end_frame', function() {
    it('increments the frame counter if there are two rolls', function() {
      game.roll(3)
      game.roll(4)
      game.end_frame()
      expect(game.frame_count).toEqual(1)
    })
    it('increments the frame counter if there was a strike', function() {
      game.roll(10)
      game.end_frame()
      expect(game.frame_count).toEqual(1)
    })
    it('does not increment the frame counter after a single roll', function() {
      game.roll(3)
      game.end_frame()
      expect(game.frame_count).toEqual(0)
    })
    it('adds the frame rolls to a roll display', function() {
      game.roll(3)
      game.roll(4)
      game.end_frame()
      expect(game.roll_display).toEqual([[3,4]])
      expect(game.frame_rolls).toEqual([])
    })
  })

  describe('frame_score', function() {
    it('adds the frame score', function() {
      game.roll(4);
      game.roll(3);
      game.end_frame()
      game.frame_score(game.frame_count-1)
      expect(game.frame_scores).toEqual([7])
    })
  })

  describe('total_score', function() {
    it('adds up the frame scores', function() {
      game.roll(4);
      game.roll(3);
      game.end_frame()
      game.frame_score(game.frame_count-1)
      expect(game.total_score()).toEqual(7)

    })
  })

});