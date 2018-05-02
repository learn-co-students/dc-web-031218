class CreateDinosaursTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :dinosaurs_types do |t|
      t.belongs_to :dinosaur, foreign_key: true
      t.belongs_to :type, foreign_key: true
    end
  end
end
