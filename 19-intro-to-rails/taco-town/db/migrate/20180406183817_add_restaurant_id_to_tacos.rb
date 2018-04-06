class AddRestaurantIdToTacos < ActiveRecord::Migration[5.1]
  def change
    add_column :tacos, :restaurant_id, :integer
  end
end
