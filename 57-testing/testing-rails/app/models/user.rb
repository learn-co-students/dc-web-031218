class User < ApplicationRecord
  validates :name, uniqueness: true

  def throws_an_error
    begin
      throw ArgumentError.new("something wrong")
    rescue ArgumentError
      puts "have to have the right args"
    end
  end
end
