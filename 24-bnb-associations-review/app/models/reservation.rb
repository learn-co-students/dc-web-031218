class Reservation < ActiveRecord::Base
  belongs_to :listing
  belongs_to :guest, class_name: 'User'
  has_one :review
end

# user has_many :tweets
# look for tweets where user_id is self.id
# look for THE review where the foreign_key reservation_id
# tweet belongs_to :user #=> foreign_key: user
