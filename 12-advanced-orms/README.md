# Advanced ORMs

## Objectives

1.  Connect Ruby models to database tables (build CRUD methods for a Ruby class)
2.  Use inheritance to extract methods for reuse
3.  Introduce "metaprogramming" concepts

## Executing SQL from Ruby

* Set up a connection to SQLite3 process using the gem
* Use `connection.execute(string)` to execute some sql against the database
* Get back `___` from the gem
* Turn the response into Ruby objects

## Connecting Ruby classes to SQL tables

Let's look at the `Artist` class in `artist.rb`

What _class methods_ do we want?
What _instance methods_ do we want?

Create
Read
Update
Destroy

## Inheritance: Generalizing Ruby classes

Why would we use inheritance?
What is _hard_ about using inheritance?
