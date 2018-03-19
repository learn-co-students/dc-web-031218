class Favorite
  attr_reader :user, :tweet
  @@all = []
  
  def initialize(tweet, user)
    @tweet = tweet
    @user = user
    @@all << self
  end
  
  def self.all 
    @@all
  end  
  
end