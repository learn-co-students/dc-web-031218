class CreateTacoIngredients < ActiveRecord::Migration[5.1]
  def change
    create_table :taco_ingredients do |t|
      t.integer :taco_id
      t.integer :ingredient_id

      t.timestamps
    end
  end
end
