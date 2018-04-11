class Ingredient < ApplicationRecord
  has_many :taco_ingredients
  has_many :tacos, through: :taco_ingredients
end
