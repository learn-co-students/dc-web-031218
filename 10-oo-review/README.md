We are building an application to track talk show appearances. We have to track what guests are on what shows. A guest can appear on a show many times and each show has many guests appear on it. Our models are show, guest and appearance. A show has many appearances and a guest has many appearances. Show-Guest is a many to many relationship.

### Testing
Open a console session to test your code by typing `ruby tools/console.rb` in Terminal.

### Deliverables
Please build out the methods listed below.

#### Guest
  - Guest.find_all(job) returns all guests of that job type

#### Show
  - Show#invite_guest(guest, date) takes an existing guest invites them to appear on the show at a specific time
  - Show#sweeps_week returns all guests who appear during November, February, May or July
  - Show#guests_on(date) returns all guests who appeared on a specific date
  - Show#friend_of_show returns guests who have appeared on a show more than 5 times total or more than 2 times in 2018
