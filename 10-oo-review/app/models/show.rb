class Show 
  # has many appearances
  # has many guests through appearances
  @@all = []
  attr_accessor :name, :network
  
  def initialize(name, network)
    @name = name
    @network = network
    @@all << self
  end
  
  def self.all 
    @@all
  end
  
  def guests 
    #turns an array of appearances into an array of guests 
    appearances.collect {|a| a.guest}
  end
  
  def appearances 
    #return an array of appearances on this show
    Appearance.all.select {|a| a.show == self}
  end
  
  ### this is the only method used to create new appearances
  def invite_guest(guest, date)
    Appearance.new(guest, self, date)
  end
  
  def sweeps_week_guests
    # for a show to return all guests who appeared during sweeps months
    # look if date is nov, feb, may or July
    # return guest 
    sweeps_months = [2, 5, 7, 11]
    appearances.select {|a| sweeps_months.include?(a.date.month) }.map {|a| a.guest}
  end
    
end