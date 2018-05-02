class TypeSerializer < ActiveModel::Serializer
  has_many :dinosaurs
  attributes :name
end
