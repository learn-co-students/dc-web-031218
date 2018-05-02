class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :avatar
      t.string :quote

      t.timestamps
    end
  end
end
