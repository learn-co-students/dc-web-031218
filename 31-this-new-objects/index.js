// Object literals

// const puppy = {
//   name: "Floofy",
//   age: 1
// };
//
// const kitty = {
//   name: "Sparker",
//   age: 0.5
// };

// Object literals with methods
// function whoami() {
//   console.log(`I'm ${this.name}, and I'm ${this.age} years old`);
// }

// whoami.bind(puppy)();
// whoami.bind(kitty)();
//
// puppy.whoami = whoami;
// puppy.whoami();
//
// kitty.whoami = whoami;
// kitty.whoami();

// Shared methods

// const puppy = {
//   name: "Floofy",
//   age: 1,
//   whoami: whoami
// };
//
// const kitty = {
//   name: "Sparker",
//   age: 0.5,
//   whoami: whoami
// };
//
// [puppy, kitty].forEach(pet => pet.whoami());
//
// Object factories

// IIFE to give us a closure to hide our function
// const petFactory = (function() {
//   function whoami() {
//     console.log(`I'm ${this.name}, and I'm ${this.age} years old`);
//   }
//
//   function petFactory(name, age) {
//     const newPet = {
//       name: name,
//       age: age
//     };
//     newPet.whoami = whoami.bind(newPet);
//     return newPet;
//   }
//   return petFactory;
// })();

// function dogFactory(name, age) {
//   const newDog = petFactory(name, age);
//   newDog.bark = bark.bind(newDog);
//   return newDog;
// }

// const puppy = dogFactory("Floofy", 1);
// const kitty = petFactory("Sparker", 0.5);
// const hammy = petFactory("Dr. Squeak", 14);

// Object factories with prototypes

// function dogFactory(name, age) {
//   const newDog = Object.create(dogPrototype);
//   newDog.name = name;
//   newDog.age = age;
//   return newDog;
// }
//
// const puppy = dogFactory("Floofy", 1);
// const furball = dogFactory("Furball", 1);

// function Pet() {}
//
// Pet.prototype.walk = function() {
//   console.log("I'm walking");
// };
//
// // Constructors - the 'new' keyword
// const Dog = (function() {
//   // 'Class' variables
//   const breeds = ["lab", "schnouser", "corgi", "golden"];
//
//   function Dog(name, age) {
//     // initialize
//     this.name = name;
//     this.age = age;
//   }
//
//   // 'Inheritance'
//   Dog.prototype = Object.create(Pet.prototype);
//
//   // 'Instance' methods and variables
//   Dog.prototype.bark = function bark() {
//     console.log(`Woof ${this.name}`);
//   };
//   Dog.prototype.whoami = function whoami() {
//     console.log(`I'm ${this.name}, and I'm ${this.age} years old`);
//   };
//
//   // class methods
//   Dog.getAllBreeds = function() {
//     return breeds;
//   };
//
//   return Dog;
// })();

// constructor call - 'this' is the new object

// class syntax

class Pet {
  walk() {
    console.log("I'm walking");
  }
}

class ActiveRecordBase {
  static all() {
    // fetched all
  }
}

class Dog extends ActiveRecordBase {
  static get breeds() {
    return ["lab", "schnouser", "corgi", "golden"];
  }

  static allBreeds() {
    return ["lab", "schnouser", "corgi", "golden"];
  }

  get myname() {
    return "My name is" + this.name;
  }

  constructor(name, age) {
    super();
    this.name = name;
    this.age = age;
  }

  bark() {
    console.log("Woof", this.name);
  }

  whoami() {
    console.log(`I'm ${this.name}, and I'm ${this.age} years old`);
  }
}

const puppy = new Dog("Floofy", 1);
