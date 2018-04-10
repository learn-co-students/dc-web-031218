class RemoveDateFromTacos < ActiveRecord::Migration[5.1]
  def change
    remove_column :tacos, :date, :datetime
  end
end
