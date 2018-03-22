class Show 
  def initialize(name, network)
    @name = name
    @network = network
    @@all << self
  end
end