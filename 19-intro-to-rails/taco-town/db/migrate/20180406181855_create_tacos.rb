class CreateTacos < ActiveRecord::Migration[5.1]
  def change
    create_table :tacos do |t|
      t.integer :num_ingredients
      t.string :name

      t.timestamps
    end
  end
end
