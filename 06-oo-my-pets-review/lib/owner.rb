require 'pry'
class Owner
  # code goes here
  @@owners =[]
  attr_reader :species
  attr_accessor :name, :pets

  def initialize(species)
    @species = species
    self.class.all << self
    @pets = {:fishes => [], :dogs => [], :cats => []}
  end

  def say_species
    "I am a #{@species}."
  end

  def buy_fish(name)
    f = Fish.new(name)
    @pets[:fishes] << f
  end

  def buy_cat(name)
    c = Cat.new(name)
    @pets[:cats] << c
  end

  def buy_dog(name)
    c = Dog.new(name)
    @pets[:dogs] << c
  end

  def walk_dogs
    # iterate over our dogs
    # change mood to happy
    @pets[:dogs].each{|dog| dog.mood="happy"}
  end

  def play_with_cats
    @pets[:cats].each{|cat| cat.mood="happy"}
  end

  def feed_fish
    @pets[:fishes].each{|fish| fish.mood="happy"}
  end

  def sell_pets
    all_pets = @pets[:dogs].concat(@pets[:cats]).concat(@pets[:fishes])
    all_pets.each{|pet| pet.mood="nervous"}

    @pets = {:fishes => [], :dogs => [], :cats => []}
    # binding.pry
    # @pets.each do |type, pets|
    #   pets.each do |pet|
    #     pet.mood = "nervous"
    #   end
    #   pets.clear
    # end
  end

  def list_pets
    fish_count = @pets[:fishes].length
    dog_count = @pets[:dogs].length
    cat_count = @pets[:cats].length
    "I have #{fish_count} fish, #{dog_count} dog(s), and #{cat_count} cat(s)."
  end

  def self.all
    @@owners
  end

  def self.reset_all
    self.all.clear
  end

  def self.count
    self.all.length
  end
end
