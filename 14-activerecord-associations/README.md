# ActiveRecord Associations

## Objectives

* See the SQL that ActiveRecord runs behind the scenes
* Implement one-to-many relationships using ActiveRecord has_many and belongs_to
* Implement many-to-many relationships using ActiveRecord has_many, :through
* Describe the methods that the relationship macros add to a model
* Practice looking up library documentation

## Models

Ruby Class
Database table

models/

Core business logic of our application

## ActiveRecord Base methods

* all
* find_by
* find
* create
* find_or_create
* destroy

* attr_accessors (name, genre, grammy_award_winner, etc..)

## Steps in the setup

* Setup all the configuration (rakefile, gemfile, bundle install, adapter)
* Let ActiveRecord know about our database
* create the database

1.  Create a migration (specify what the columns are for our new model)
2.  Run our migration
3.  Add a file with the name of the model, in that file, add a class that inherits from ActiveRecord::Base

* song.rb
* albums
* genres

## Many to Many relationship

Artist
Song

Songs have an artist
Songs have a genre
Artists have many songs
Genres have many songs
Genres have many artists through songs
Artists have many genres through songs

* Genres table
* Genre class
* create the associations
