// The new operator creates an instance of a user-defined object
// If you didn't write the new operator, the Constructor Function would be invoked like any Regular Function, without creating an Object

// NEW SYNTAX 😍
class Vehicle {
  drive() {
    console.log('HONKING', this.make);
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    // because car inherits from Vehicle, we need to call super
    // super calls the constructor on Vehicle
    super();
    this.make = make;
    this.model = model;
  }
}

// nice new class syntax
const honda = new Car('honda', 'pilot');
typeof honda; // 'object'
// honda does not have a property of drive, but honda can look up the prototype chain to call drive()
honda.drive(); // 'HONKING honda' why? because the execution context of drive is the honda object
honda.constructor; // Car
Car.prototype; // Vehicle
// Vehicle prototype is a js object with constructor and drive properties
Vehicle.prototype; // { constructor: fn, drive: fn }
typeof Vehicle; // 'function'

/******************************************************************************/

function Sedan(make, model) {
  this.make = make;
  this.model = model;
}

Sedan.prototype.drive = function() {
  console.log('DRIVING', this.make);
};

// new creates an instance of a user defined object
const camry = new Sedan('toyota', 'camry');
typeof camry; // 'object'
camry.drive(); //DRIVING camry
typeof Sedan; // 'function'
typeof Sedan.prototype; // 'object'
Sedan.prototype; // { drive: fn, constructor: fn }

/******************************************************************************/

const Truck = {
  drive: function() {
    console.log('HONKING', this.make);
  },
};

//from the docs: Object.create() creates a new object, using an existing object to provide the newly created object's __proto__ .
const ford = Object.create(Truck);
ford.__proto__; // {drive: fn} -> the proto of ford will be our Truck object
typeof ford; // 'object'
ford.make = 'ford'; //since ford is a regular object, we can set properties on it
ford.model = 'f650';
ford.drive(); // 'HONKING ford' -> because Truck is ford's __proto__ we can look up the chain to find the drive() method

/******************************************************************************/
