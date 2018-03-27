class AddTables < ActiveRecord::Migration[4.2]
  def change
    create_table :fans do |t|
      t.string :name
      t.integer :artist_id
    end

    create_table :albums do |t|
      t.string :name
      t.integer :artist_id
    end
  end
end
