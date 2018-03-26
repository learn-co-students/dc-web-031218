class Artist
  attr_accessor :name
  attr_reader :id

  def initialize(name, id = nil)
    @name = name
    @id = id
  end

  def self.all
    DB.execute("SELECT * FROM artists").map do |result|
      Artist.new(result[1], result[0])
    end
  end

  def save
    if @id.nil?
      sql = "INSERT INTO artists(name) VALUES (?)"
      DB.execute(sql, @name)
      @id = DB.last_insert_row_id
      self
    else
      sql = <<-SQL
        UPDATE artists
        SET name = ?
        WHERE artistId = ?
      SQL
      DB.execute(sql, @name, @id)
      self
    end
  end

  def destroy
  end

  def self.find
  end

  def self.new_from_db
  end

  def self.create
  end

  def self.find_or_create
  end

  def self.where
  end
end
