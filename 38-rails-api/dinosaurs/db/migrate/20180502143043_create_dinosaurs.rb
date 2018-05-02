class CreateDinosaurs < ActiveRecord::Migration[5.1]
  def change
    create_table :dinosaurs do |t|
      t.string :name
      t.integer :height
      t.integer :weight
      t.integer :pokedex_order
      t.string :front_sprite
      t.string :back_sprite

      t.timestamps
    end
  end
end
