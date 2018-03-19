require 'pry'
require_relative './tweet.rb'
require_relative './user.rb'
require_relative './favorite.rb'


coffee_dad = User.new('Coffee_Dad')
tweet1 = Tweet.new('havin coffe', coffee_dad)
tweet2 = Tweet.new('coffe time', coffee_dad)
tweet3 = Tweet.new('yum cuppa joe', coffee_dad)
tweet4 = Tweet.new('is this what my life has become', coffee_dad)

tea_uncle = User.new('Tea_Uncle')
tweet5 = Tweet.new('steep for 5 minutes', tea_uncle)
tweet6 = Tweet.new('matcha goodness', tea_uncle)
tweet7 = Tweet.new('you are always the person you want to be', tea_uncle)

binding.pry
