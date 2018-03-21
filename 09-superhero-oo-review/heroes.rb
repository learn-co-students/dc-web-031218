require 'pry'

class Hero
  attr_accessor :name, :powers
  @@all = []
  
  def initialize(name)
    @name = name
    @@all << self
  end
  
  def powers
    # select all heropowers from heropower for a hero
    # map those heropowers into power
    HeroPower.all.select { |hp| hp.hero == self }.map { |hp| hp.power }
  end
  
  def add_power(power)
    # stores hero power information in HeroPower.all
    # keeps single source of truth so we don't store powers in heroes and heros in powers
    HeroPower.new(self, power)
  end
  
  def add_brand_new_power(power_name)
    power = Power.new(power_name)
    add_power(power)
  end
  
  def remove_power(power)
    HeroPower.all.reject! {|hp| hp.hero == self && hp.power == power}
  end
  
  def remove_powers(power_array)
    power.array.each{ |p| remove_power(p) }
  end
  
  def self.all 
    @@all
  end
end


class Power 
  attr_accessor :name
  @@all = []

 def initialize(name)
   @name = name
   @@all << self
 end  
 
 def self.all 
   @@all
 end
end


class HeroPower
  attr_accessor :hero, :power
  @@all = []
  
  def initialize(hero, power)
    @hero = hero
    @power = power
    @@all << self
  end
  
  def self.all 
    @@all
  end
end

binding.pry
puts 'niky is my hero'








