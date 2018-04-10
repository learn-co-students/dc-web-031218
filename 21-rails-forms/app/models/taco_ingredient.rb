class TacoIngredient < ApplicationRecord
  belongs_to :taco
  belongs_to :ingredient
end
