# This, new and objects

Lecture 1
- `this` and function context
- arrow functions and context

Lecture 2
- prototypes
- constructors
- classes

## `this` and function context

// not self
// it's this

self is a reference to the enclosing object

```
class Dog
  def bark
    puts self.name
  end
end
```

```
const dog = {
  name: 'Scruffy',
  bark: function() {
    console.log(this.name);
  }
}

dog.bark(); // 'this' is the dog
const bark = dog.bark;
bark(); // 'this' is global
```

How do we control  `this`?
- invoke the function with some object on the left - dog.bark(), dog is `this`
- bind - attaches an object to this, cannot be rebound
- call - call the function, with a 'this', args are comma separated
- apply - calls the function with a 'this', args are an array []

## Arrow functions

what will we see?

```js
// with a normal callback function
function arrayTimesThis(array) {
  console.log(this)
  var self = this;
  return array.map(function (x) {
    console.log(this)
    return this.num * x
  });
}

let obj = { num: 6, multiply: arrayTimesThis }
obj.multiply([1,2,3])
// here

// with an arrow function
function arrayTimesThisArrow(array) {
  return array.map((x) => {
    return this.num * x
  });
}

obj = { num: 6, multiply: arrayTimesThisArrow }
obj.multiply([1,2,3,4])
// here

// using `bind` explicitly
function arrayTimesThisBind(array) {
  return array.map((function (x) {
    return this.num * x
  }).bind(this));
}

obj = { num: 6, multiply: arrayTimesThisBind }
obj.multiply([1,2,3])
```

## Classes in JS?

We want something like ruby classes, so that we can encapsulate data and behavior.

How do we get it?

- Objects
- Factories
- Constructor calls
- Class syntax

## Relationships between objects
