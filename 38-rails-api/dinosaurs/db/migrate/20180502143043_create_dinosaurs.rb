class CreateDinosaurs < ActiveRecord::Migration[5.1]
  def change
    create_table :dinosaurs do |t|
      t.string :name
      t.string :breed
      t.string :time_period

      t.timestamps
    end
  end
end
