class Taco < ApplicationRecord
  has_many :taco_ingredients
  has_many :ingredients, through: :taco_ingredients
end
