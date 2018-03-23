class Artist
  attr_accessor :name
  attr_reader :id

  def initialize(name, id = nil)
    @name = name
    @id = id
  end

  def self.create_table

  end

  def self.all
    sql = "SELECT * FROM artists"
    array_of_arrays = DB.execute(sql)
    array_of_arrays.map do |result|
      Artist.new(result[1], result[0])
    end
  end

  # what arguments should .find take?
  def self.find
  end

  # def self.where
  # end

  # def self.find_or_create
  # end

  def save
    if @id.nil?
      # If there is no artist in the database
      #   Insert Into
      sql = "INSERT INTO artists(name) VALUES (?)"
      DB.execute(sql, @name)
      @id = DB.last_insert_row_id
      self
    else
    # Already an artist in the database
    # Don't want to insert a new one!
    # UPDATE
    sql = <<-HERE
      UPDATE artists
      SET name = ?
      WHERE artistId = ?
    HERE
      DB.execute(sql, @name, @id)
      self
    end
  end

  def self.create
  end

  def destroy
  end
end
