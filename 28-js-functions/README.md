# JS Functions
## Agenda
We'll keep seeing
- Syntax
- Differences between ruby and js
- JS 'Razors' - gotchas

This lecture:
- statements vs expressions
- functions are objects
  - Assign functions to variables
  - Pass functions as arguments to functions
  - Return functions inside functions
  - arrow syntax
- Scope (let, const, var)
- Closures
- IIFEs

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

## Statements vs. Expressions

What are statements?
What are expressions?

What are the different ways we can create a function?

## Functions _are_ objects

'callbacks'

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

From before:
- 'bad' values instead of errors

New Danger:
- globals
  - 'use strict';
- shadowing

## Links

- [Strict Mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
