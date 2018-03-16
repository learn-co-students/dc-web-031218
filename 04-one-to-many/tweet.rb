class Tweet
  attr_accessor :message
  attr_reader :user

  @@all = []

  def initialize(message, user)
    @message = message
    @user = user
    @@all << self
    # works but we are using a different pattern
    # user.tweets << self
  end

  def username
    user.name
  end

  def self.all
    @@all
  end

  # should finding a user's tweets be the responibility of the user instance or the Tweet model?
  # def self.user_tweets(user)
  #   Tweet.all.select {|tweet| tweet.username == user.name}
  # end


end
