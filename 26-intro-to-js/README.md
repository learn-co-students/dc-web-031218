# Intro to JS

- History and context
- How to learn a new language
- JS Basics
- JS 'Razors' - gotchas

## History and Context
- AJAX
- Transpilers - toolset for writing compatible javascript
- Language evolution

Today
- browser
- server-side node
- mobile applications
- embedded (robots, cars, toaster)


Page performance
Load times
On page performance

Which languages for what applications?

## Considerations now that we are running code on other machines
Where the data gets stored
Security
Size
Performance
Compatibility

## How to learn a new language
- how do I run code?
- debug
- syntax
- datatypes
- standard library
- patterns that are common
- exploring popular libraries and frameworks
- docs
- google

## Up and running with JS
- node
- browser


script tag - affects load times
we want the page to be _fast_

## Requests

- click something - navigate
- in order to bring up a view
- submit a form
- change the url

## Datatypes

Primitive -- passed by value (immutable)
- String
 Similar to strings in ruby
 'literal'
 "literal"
 `interpolation ${2+2}` - template literal

- Number (not quite an Integer), NaN
- Boolean (true, false) - more falsy values (0, '', null, undefined, NaN, false)
- Null - not used anywhere by default - it's a way to signal an empty value (like nil in ruby)
- Undefined - this is the value of a variable that hasn't been assigned (default return value of a function)
- Symbol


------

Object - passed by reference (if the function is _impure_, it changes the inputs (or has other side effects))
- Object - everything else
   - {}
   - object[''] == object.property
   - dot access
   - in ruby, calling a method
   - in js - accessing a property (with the caveat - can call a property getter)

How to call an object's method?
  - invoke in js with ()
  - object.turnIntoAPumpkin // reference to the function
  - object.turnIntoAPumpkin() // calls the function

in ruby 'sending' methods to objects

'Calling a method on an object' - not quite as meaningful



## Pass by value / pass by reference

What will we see?

```
function changeValue(str) {
  str.toUpperCase()
}

let name = "Rob";
changeValue(name);
console.log(name);

function changeValue(num) {
  num++;
}

let number = 99;
changeValue(number);
console.log(number);

// is it possible to write a function that actually changes the output?

function changePirate(arr) {
  arr[0] = "long john silver";
}

let pirates = ['tampa', 'pittsburgh', 'oakland', 'minnesota'];
changePirate(pirates);
console.log(pirates);
```

## Ruby vs Javascript


## Javascript 'Razors'

- Number type - it's everything
- NaN (Infinity, -Infinity)
- Get 'bad' values instead of errors
- More falsy things
- null is weird
