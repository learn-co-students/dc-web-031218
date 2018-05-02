class DinosaurSerializer < ActiveModel::Serializer
  has_many :abilities
  has_many :types
  has_many :moves
  attributes :name, :pokedex_order, :height, :weight, :abilities, :moves, :types
end
