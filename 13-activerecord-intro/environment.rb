require 'sqlite3'
require 'require_all'
require 'active_record'
require_all 'lib'
require 'pry'
require "sinatra/activerecord"

# setting up the database connection
DB = SQLite3::Database.new("db/chinook.db")

# Changed
ActiveRecord::Base.establish_connection :development
