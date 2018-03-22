class Appearance
  # belongs to guest
  # belongs to show
  attr_accessor :guest, :show, :date
  @@all = []
  
  def initialize(guest, show, date)
    @guest = guest
    @show = show
    @date = date
    @@all << self
  end
  
  def self.all 
    @@all
  end
end