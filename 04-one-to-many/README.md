## The World So Far
- creating a class is like a blueprint
- initialize creates new instances
  - called Account.new
- flatiron = School.new('Flatiron')
- flatiron.instructors = ['Rob', "Andrew", "Niky"]
- flatiron.instructors = [<'rob'>, <'Andrew'> ]
- flatiron.instructors.map{|i| i.location} => ['DC', "DC", "DC"]



## Objectives
 - one to many
   - something belongs to something
   - something has many of something
 - single source of truth
 - classes and instances should be responsible for knowing about themselves


Domain: Twitter
Domain Models: Tweet, User



## Deliverables
* Create a User class. The class should have these methods:
  * `#initialize` which takes a username and have
  * a reader, writer method for the username
  * `#tweets` that returns an array of Tweet instances
  * `#post_tweet` that takes a message, creates a new tweet, and adds it to the user's tweet collection
* Create a Tweet class. The class should have these methods:
  * `Tweet#message` that returns a string
  * `Tweet#user` that returns an instance of the user class
  * `Tweet.all` that returns all the Tweets created.
  * `Tweet#username` that returns the username of the tweet's user
