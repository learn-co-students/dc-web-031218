class Song < ActiveRecord::Base
  belongs_to :artist
  belongs_to :genre
  has_many :notes

  def artist_name
    # self.artist.name
    artist.try(:name)
  end

  def artist_name=(name)
    self.artist = Artist.find_or_create_by(name: name)
  end

  def genre_name
    genre.try(:name)
  end

  def genre_name=(name)
    self.genre = Genre.find_or_create_by(name: name)
  end

  def note_contents
    # @note #=> content: "content"
    notes.map(&:content)
  end

  def note_contents=(notes)
    note_instances = notes.map do |note_content|
      Note.create(content: note_content)
    end

    note_instances.each do |note|
      self << note
    end

    self.notes << notes.reject(&:empty?).map { |n| Note.create(content: n) }
    byebug
  end

  # attr_accessor :artist
  # when i call Song.new(song_params), this happens:
  # song init method
  # def initialize(params)
  #   params.each do |k, v|
  #     self.k = v
  # self.genre_id = 5 #=> one iteration
  #   end
  # end

  # params[:song] => {
  #   title: 'oops i did it again',
  #   artist_name: 'britney spears',
  #   genre_id: 1,
  # note_contents: [
  #   'nice song',
  #   'fun party'
  # ]
  # }
end
