# JS Functions
## Agenda
We'll keep seeing
- Syntax
- Differences between ruby and js
- JS 'Razors' - gotchas

This lecture:
- statements vs expressions
- functions are objects
- Scope (let, const, var)
- Closures
- IIFEs


## Questions
switch >=

== vs. ===
-  == 'coerces' (10 == '10')
  - if (a == null) // also catch undefined
- === exact match (10 === 10)

## How to learn a new language
- how do I run code?
- debug
- *syntax*
- datatypes
- standard library
- *common patterns*
- exploring popular libraries and frameworks
- docs

## Datatypes

Primitive -- passed by value (immutable)
- String
- Number
- Boolean
- Null
- Undefined
- Symbol

----

Object
- Object

Functions are objects!
- mutable
- literal syntax uses {}
- access properties ( dot notation, [] notation)

## Statements vs. Expressions

What are statements?
- switch statement
- if statement
- if else if statement
- loops (while, for, for..in, for..of, do...while)
- one or more expressions

can have expressions inside

What are expressions?
- returns a value
-  2+2
- "A string"
- literals
- comparators
- property access
- function calls
```
doThing();
```
- combinations
  - (2+2)+2

* functions

What are the different ways we can create a function?
- function statement: 'function' name ([names of some arguments]) { [series of statements] }
- arrow syntax:
  ```
([arguments]) => {
    [series of statements]
  }
  ([]) => "value";
  ```
- function expression

## Functions _are_ objects
- Assign functions to variables
- Pass functions as arguments to functions
- Return functions from functions
- Arrow syntax
- 'Callbacks'
  - call a function within a function
  - passed that function as an argument

## Game 2: Name that Scope

```js

// function scope

function updateMammal() {
  var bird = 'penguin';
}

console.log(bird);

/****************************************************/

// if statement
var mammal = "alpaca";
if (true) {
  var mammal = "platypus";
}
console.log(mammal);

/****************************************************/

// let vs. var
let mammal = "alpaca";
if (true) {
  let mammal = "platypus";
}
console.log(mammal);

/****************************************************/

// more about let

if(true) {
  let mammal = "alpaca";
  let mammal = "platypus";
}

console.log(mammal);

/****************************************************/

// let vs const
if (true) {
  let mammal = "camel";
  mammal = "dromedary";
  console.log(mammal);
}

if (true) {
  const mammal = "camel";
  mammal = "dromedary";
  console.log(mammal);
}

/****************************************************/

// in a function
var mammal = "echidna";
function updateMammal() {
  var mammal = "capybara";

  mammal.toUpperCase()
}

updateMammal();
console.log(mammal);

/****************************************************/

// function, part 2

var mammal = "echidna";
function updateMammal() {
  mammal = "capybara";
}
updateMammal();
console.log(mammal);
```



## Scope

Remember Deli counter?

## Closures and IIFEs

Example: Memoization

## Functional Programming

- Declarative vs. Imperative
- pure functions
- higher order functions
- function composition

## Javascript 'Razors'

- No Arity Checking
- No runtime error for not enough args

From before:
- 'bad' values instead of errors

New Danger:
- globals
  - 'use strict';
- shadowing

## Links and References

- [Strict Mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
