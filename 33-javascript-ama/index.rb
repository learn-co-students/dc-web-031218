class Person
  attr_accessor :name, :age

  def initialize(name, age)
    @name = name
    @age = age
  end

  def say_name
    puts "Hi my name is #{name}"
  end
end

andrew = Person.new('andrew', 100)
