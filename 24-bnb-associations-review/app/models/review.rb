class Review < ActiveRecord::Base
  belongs_to :guest, class_name: 'User'
  belongs_to :reservation
  # _review: has foreign_key reservation_id
end
