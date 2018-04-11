class CreateTacos < ActiveRecord::Migration[5.1]
  def change
    create_table :tacos do |t|
      t.string :name
      t.datetime :date

      t.timestamps
    end
  end
end
