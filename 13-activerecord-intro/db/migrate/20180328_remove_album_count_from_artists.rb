class RemoveAlbumCountFromArtists < ActiveRecord::Migration[4.2]
  def change
    remove_column :artists, :album_count
    add_column :artists, :address, :string
  end
end
