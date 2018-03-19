class Tweet
  attr_accessor :message
  attr_reader :user

  @@all = []

  def initialize(message, user)
    @message = message
    @user = user
    @@all << self
    @favoriters 
  end

  def username
    user.name
  end

  def self.all
    @@all
  end
  
  def favoriters
    Favorite.all.select {|favorite| favorite.tweet == self}.map {|favorite| favorite.user.name}
  end
end
