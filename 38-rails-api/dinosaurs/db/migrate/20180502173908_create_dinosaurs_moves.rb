class CreateDinosaursMoves < ActiveRecord::Migration[5.1]
  def change
    create_table :dinosaurs_moves do |t|
      t.belongs_to :dinosaur, index: true
      t.belongs_to :move, index: true
    end
  end
end
