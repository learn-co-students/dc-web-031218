require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end


kh = Guest.new('Kevin Hart', 'comedian')
jm = Guest.new('John Mulaney', 'comedian')
tf = Guest.new('Tina Fey', 'actor')
kb = Guest.new('Kate Beckinsale', 'actor')
ndt = Guest.new('Neil deGrasse Tyson', 'scientist')
bn = Guest.new('Bill Nye', 'scientist')
rock = Guest.new('The Rock', 'actor')
ellen = Show.new('The Ellen Show', 'NBC')
fallon = Show.new('The Tonight Show Starring Jimmy Fallon', 'NBC')
kimmel = Show.new('Jimmy Kimmel Live', 'CBS')
Appearance.new(bn, ellen, Date.new(2017, 5, 6))
Appearance.new(kh, fallon, Date.new(2017, 11, 8))
Appearance.new(kb, kimmel, Date.new(2016, 1, 23))
Appearance.new(rock, ellen, Date.new(2017, 2, 16))
Appearance.new(ndt, fallon, Date.new(2015, 8, 26))
Appearance.new(tf, fallon, Date.new(2015, 8, 26))
Appearance.new(ndt, fallon, Date.new(2015, 8, 26))
Appearance.new(ndt, fallon, Date.new(2015, 8, 26))

Pry.start