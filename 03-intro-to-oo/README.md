# Intro to Object Orientation

## Objectives

* Define `object` in programming domain
* Create a class and instantiate an instance of the class
* Explain the difference between a class and an instance
* Pass arguments to `new` by defining an initialize method in class
* Create instance methods
* Define attribute readers and writers using `attr_` macros
* Get more practice with array compositions (`each`, `map`, `select`/`filter`)
* Explain the need for variable scope and why it's important to not utilize global variables

## Deliverables

Here is a naive implementation of a bank account in Ruby using only a hash which stores key-value pairs.

```ruby
bank_account = {"owner_name": "niky", "balance": 100}
```

Write an implementation of a bank account that meets the following requirements:

.whale should return the account with the largest balance
.overdraw_warning should return all accounts under min balance of 300
#deposit should increase an account balance by a specific amount
#withdraw should decrease an account balance by a specific amount  
