class Game {

  constructor () {
    this.pins = 0
    this.secondPins = 0
    this.framePins = []
    this.frameCount = 0
    this.strikeBonus = []
    this.spareBonus = []
    this.rollDisplay = []
    this.strikeCount = 0
    this.spareCount = 0
    this.frameScore = []
    this.strikes = []
    this.spares = []
  }

  pinsHit(pins) {
    return this.pins = pins
  }

  firstRoll(pins) {
    this.pinsHit(pins)
    this.strike() ? this.addPins("X") : this.addPins(pins)
  }

  strike() {
    return (this.pins == 10)
  }

  addStrikeBonus(bonus) {
    this.strikeBonus.push(bonus)
  }

  secondRoll(pins) {
    this.secondPins = pins
    this.spare(pins) ? this.addPins("/") : this.addPins(pins)
  }

  spare(roll) {
    return (this.pins + roll == 10)
  }

  addSpareBonus(bonus) {
    this.spareBonus.push(bonus)
  }

  frameIncrease() {
    this.frameCount ++
  }

  endFrame() {
    this.rollDisplay.push(this.framePins)
    this.framePins = []
    this.frameIncrease
  }

  finalFrame() {
    return(this.frameCount == 9)
  }

  addPins(pins) {
    this.framePins.push(pins)
  }

  checkStrikeBonus() {
    if(this.rollDisplay.length >= 1) {
      return this.rollDisplay[-1].includes("X")
    } else if(this.rollDisplay.length >= 2) {
      return this.rollDisplay[-2].includes("X")
    }
  }

  // add_bonus(pins)
  //   if strike_bonus? || roll_2_bonus?
  //     Bonus.add_strike(pins)
  //   elsif spare_bonus?
  //     Bonus.add_spare(pins)
  //   end
  // end

  includeStrikeBonus() {
    this.frameScore.push(this.strikes[this.strikeCount]+this.strikes[this.strikeCount+1]+10)
  }

  includeSpareBonus() {
    this.frameScore.push(this.spares[this.spareCount]+10)
  }

  // scoreDisplay() {
  //   this.rollDisplay.forEach(frame) {
  //     if(frame.includes("X")) {
  //       if(this.strikes[this.strike_count+1] == nil || this.strikes.length == 0) {
  //         this.frameScore.push(10)
  //       } else {
  //         this.includeStrikeBonus()
  //         this.strikeCount ++
  //       }
  //     } else if(frame.includes("/")) {
  //       if(this.spares.length == 0) {
  //         this.frameScore.push(10)
  //       } else {
  //         this.includeSpareBonus()
  //         this.strikeCount ++
  //       }
  //     } else {
  //       this.frameScore(frame)
  //     }
  //   }
  // }
}
// def display(roll_display)
//       @strike_count, @spare_count, @frame_score = 0, 0, []

//       roll_display.each { |frame|
//         if frame.include? "X" 
//           if Bonus.strikes[@strike_count+1] == nil || Bonus.strikes.empty?
//             add_max
//           else
//             include_strike_bonus
//             @strike_count += 1
//           end
//         elsif frame.include? "/"
//           if Bonus.spares.empty?
//             add_max
//           else
//             include_spare_bonus
//             @spare_count += 1
//           end
//         else
//           @frame_score << frame.sum
//         end
//       }
//       @frame_score.inject([]) { |x, y| x + [(x.last || 0) + y] }
//     end