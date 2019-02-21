### Map/Collect

* creates a new array containing the values returned by the block
* return array will be the same size as the original array
* does not mutate original array
* use when you want to get some data related to the original array for each element in it
* example: I want to get a list of students' first names

```ruby
['Kyle DiPeppe',
  'Yolanda Galdamez',
  'Jerry Lee',
  'Austin Wolfe'
].collect { |full_name| full_name.split(' ').first }
#=> ['Kyle', 'Yolanda', 'Jerry', 'Austin']
```

### Select

* returns a new array containing all elements of the initial array for which the given block returns true
* return array will be less than or equal in size to the original array because you are selecting only matching elements
* does not mutate original array
* use when you want to find matches out of an array
* example: I want a list of students who's names start with 'M'

```ruby
['Mario Gamboa-Diaz',
  'Mor Kenane',
  'Max Goodman',
  'Leeza Luncheon'
].select { |name| name.start_with?('M') }
#=>  ['Mario Gamboa-Diaz', 'Mor Kenane', 'Max Goodman']
```

### Each

* calls the given block once for each element in the array
* returns original array
* does not mutate original array
* use when you want to perform some other task based on information in the array
* example: Let's say I build a slackbot that would send a message to each student I pass to it

```ruby
['Justin Hamlin',
  'Deep Patel',
  'Ryan Youngdale'
].each { |student|  send_a_slack_message_to(student) }
#=>  ['Justin Hamlin', 'Deep Patel', 'Ryan Youngdale']
```

* note: though this method returned the array, it also executed other code which sent slack messages to all these

### Find/Detect

* returns the first element for which block is true
* returns the element itself, not an array
* does not mutate original array
* use when you expect only one match from a unique attribute, or would accept any match

```ruby
[
  { name: 'Bruno Garcia Gonzalez',
    status: 'student'
  },
  { name: 'Rob Cobb',
    status: 'instructor'
  },
  { name: 'Andrew Cohn',
    status: 'instructor'
  }
].find { |person|  person[:status] == 'student'}
#=> {:name=>"Bruno Garcia Gonzalez", :status=>"student"}
```
