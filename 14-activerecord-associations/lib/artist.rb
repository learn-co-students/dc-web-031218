class Artist < ActiveRecord::Base
  has_many :songs
  has_many :genres, through: :songs
  # SELECT * FROM songs WHERE songs.artist_id = self.id
  # SELECT "songs".* FROM "songs" WHERE "songs"."artist_id" = ?
end
