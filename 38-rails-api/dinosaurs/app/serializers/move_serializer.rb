class MoveSerializer < ActiveModel::Serializer
  has_many :dinosaurs
  attributes :name
end
