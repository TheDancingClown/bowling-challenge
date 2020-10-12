class Bowling {

  constructor() {
    this.roll_display = [];
    this.frame_rolls = [];
    this.frame_count = 0;
    this.frame_scores = [];
  }

  roll(number) {
    this.frame_rolls.push(number)
  }

  end_frame() {
    if(this.frame_rolls.length == 2 || this.frame_rolls[0] == 10) {
      this.roll_display.push(this.frame_rolls);
      this.frame_rolls = []
      this.frame_count ++;
    }
  }

  frame_score(frame) {
    let current_frame = this.roll_display[frame];
    let frame_score = current_frame.reduce((total, amount) => total + amount);
    this.frame_scores.push(frame_score)
  }

  total_score() {
    return this.frame_scores.reduce((total,amount) => total + amount)
  }

}
