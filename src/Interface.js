$(function() {
  let game = new Bowling();

  $(".pins").on("click", function() {
    game.roll($(this).attr("value"));
    game.end_frame()
    display()
  });
  
  function display_roll() {
    $("#roll_1").text(game.frame_rolls);
    $("#roll_2").text(game.roll_display[game.frame_count-1]);
    
  }

  function display() {
    $("#roll_1").text(game.frame_rolls);
    $("#roll_2").text(game.roll_display)
  }

  function display_frame_score() {
    $("#frame_score").text(game.frame_scores[game.frame_counter-1])
  }

})