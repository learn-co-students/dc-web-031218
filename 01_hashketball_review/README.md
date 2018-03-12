# Hashketball Review

```ruby
instructors = [
  {name: 'rob', hometown: 'washington, d.c.', mood: 'excited'},
  {name: 'andrew', hometown: 'los angeles, ca', mood: 'hungry'},
  {name: 'niky', hometown: 'san francisco, ca', mood: ''}
]

def get_names(people)
  people.collect do |hash|
    hash[:name]
  end
  # DON'T USE EACH
  # use map or collect
  # just return the names
end

get_names(instructors)

def get_people_from_a_place(people, place)
  # DON'T USE EACH
  # use select
  # return a list of people from place
end

def get_person_by_name(people, name)
  # DON'T USE EACH
  # use find or detect
  # return the first person hash by name
end

def get_tally_of_moods(people)
  # DON'T USE EACH
  # return a hash whose keys are the moods and whose values are the number of times that mood appears
end

# calling .select will select all the values that pass the test in the block: n % 2 == 0
# this returns [2, 4, 6]
# we can then call .map on this array and return a mutated array: n / 2
# the final output is [1, 2, 3]
[1, 2, 3, 4, 5, 6].select{|n| n % 2 == 0}.map{|n| n / 2}

# however, calling .each does not mutate the array and will return it unchanged
# returns [1, 2, 3, 4, 5, 6]
[1, 2, 3, 4, 5, 6].each{|n| n / 2}

```
