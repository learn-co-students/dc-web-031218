class User
  attr_accessor :name
  @@all = []

  def initialize(name)
    @name = name
    @@all << self
    # works but we are using a different pattern
    # @tweets = []
  end

  def tweets
    Tweet.all.select {|tweet| tweet.username == self.name}
  end

  def self.all
    @@all
  end

end
