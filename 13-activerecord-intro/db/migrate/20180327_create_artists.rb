# Now been run on production

class CreateArtists < ActiveRecord::Migration[4.2]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :genre
      t.boolean :grammy_award_winner
      t.integer :album_count
      t.timestamps
    end
  end
end
