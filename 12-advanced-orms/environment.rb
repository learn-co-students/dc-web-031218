require 'sqlite3'
require 'require_all'
require_all 'lib'

# setting up the database connection
DB = SQLite3::Database.new("chinook.db")
