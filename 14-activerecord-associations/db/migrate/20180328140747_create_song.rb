class CreateSong < ActiveRecord::Migration[4.2]
  def change
    create_table :songs do |t|
      t.string :name
      t.integer :artist_id
      t.integer :genre_id
      t.integer :album_id
      t.string :url
    end
  end
end
