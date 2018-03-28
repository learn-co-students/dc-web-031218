class Song < ActiveRecord::Base
  belongs_to :artist
  belongs_to :genre


  # def artist
  #   # return to us the artist model that is associated with this song
  #   Artist.find(artist_id)
  # end
end
