class Guest 
  # has many appearances
  # has many shows through appearances
  @@all = []
  attr_accessor :name, :job
  
  def initialize(name, job)
    @name = name
    @job = job
    @@all << self 
  end
  
  def self.all 
    @@all
  end
  
  def shows
    # turns an array of appearances into an array of their shows
    self.appearances.collect {|a| a.show}
  end
  
  def appearances
    # return an array of appearances a guest has made
    Appearance.all.select {|a| a.guest == self}
  end

  def self.find_all(job)
    # returns all guests of that job type
    all.select {|g| g.job == job}
  end
  
end