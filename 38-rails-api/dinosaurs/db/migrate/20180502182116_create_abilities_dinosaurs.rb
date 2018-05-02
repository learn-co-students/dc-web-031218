class CreateAbilitiesDinosaurs < ActiveRecord::Migration[5.1]
  def change
    create_table :abilities_dinosaurs do |t|
      t.belongs_to :ability, foreign_key: true
      t.belongs_to :dinosaur, foreign_key: true
    end
  end
end
