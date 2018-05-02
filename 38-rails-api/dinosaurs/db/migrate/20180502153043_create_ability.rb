class CreateAbility < ActiveRecord::Migration[5.1]
  def change
    create_table :abilities do |t|
      t.string :name

      t.timestamps
    end
  end
end
