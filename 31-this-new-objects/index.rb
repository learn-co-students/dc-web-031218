class Pet
  attr_accessor :name, :age

  def initialize(name, age)
    @name = name
    @age = age
  end

  def whoami
    puts "I'm #{name}, and I'm #{age} years old"
  end
end

class Dog < Pet
  attr_accessor :breed

  def bark
    puts "Woof"
  end
end

class Dachshund < Dog
  def bark
    puts "Yip!"
  end
end

class Cat < Pet
  attr_accessor :indoor

  def initialize(name, age, indoor)
    @indoor = indoor
    super
  end

  def meow
    puts "meeeoowwww"
  end

  def outdoor
    !self.indoor
  end
end

cat = Cat.new('Sparkles', 6, true)
dog = Dog.new('Fluffy', 3, 'Cocker Spaniel')
hound = Dachshund.new('Hound', 11,
