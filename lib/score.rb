class Score
  class << self

    def total
      if @total > 300
        raise("You are cheating")
      end
      @total ||= 0
    end 

    def display
      Score.total
    end

    def increase(roll_score)
      @total ||= 0
      @total += roll_score
    end

    def reset
      @total = 0
    end
  end

end