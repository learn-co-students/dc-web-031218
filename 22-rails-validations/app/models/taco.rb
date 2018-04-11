class Taco < ApplicationRecord
  has_many :taco_ingredients
  has_many :ingredients, through: :taco_ingredients

  validates :name, presence: :true
  # validates :name, uniqueness: {case_sensitive: false}
  validates :name, :uniqueness => {:case_sensitive => false}
  validates :ingredients, presence: :true
  validate :excludes_taco_from_taco_name

  def excludes_taco_from_taco_name
    if name.downcase.include?('taco')
      errors.add(:name, 'cannot include taco')
    end
  end


end
