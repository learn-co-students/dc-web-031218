class User
  attr_accessor :name
  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def tweets
    Tweet.all.select {|tweet| tweet.username == self.name}
  end

  def self.all
    @@all
  end
  
  def post_tweet(message)
    Tweet.new(message, self)
  end
  
  def favorite_tweets
    Favorite.all.select {|favorite| favorite.user == self}.map {|favorite| favorite.tweet}
  end
  
  def add_favorite(tweet)
    Favorite.new(tweet, self)
  end
  
  
end
