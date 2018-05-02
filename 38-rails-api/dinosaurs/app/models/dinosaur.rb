class Dinosaur < ApplicationRecord
  has_and_belongs_to_many :abilities
  has_and_belongs_to_many :moves
  has_and_belongs_to_many :types
end
