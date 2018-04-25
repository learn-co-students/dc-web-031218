fi = (function() {
  return {
    libraryMethod: function() {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function(collection, callback) {
      // iterate through the collection, call the callback for each element
      // collection can be _either_ an array or a POJO
      // { a: 'b' }
      for (let key in collection) {
        callback(collection[key]);
      }
      // for an array, x will be the values in the array
      // for an object, x won't be anything
      // for (let x of collection) {
      //   console.log(x);
      // }
      return collection;
    },

    // iterates through a collection
    // calls the function at each step
    // returns a new array with the return values from calling the function
    map: function(collection, callback) {
      let newArray = [];
      for (let key in collection) {
        newArray.push(callback(collection[key], key, collection));
      }
      return newArray;
    },

    // fold
    // call the callback with the value at that step, and an accumulator, which is the return value from the previous step
    // either start with some start value
    // or do something without a start
    reduce: function(collection, callback, accumulator = 0) {
      console.log("starting accumulator", accumulator);
      for (let key in collection) {
        accumulator = callback(accumulator, collection[key], collection);
      }
      return accumulator;
    },

    // take an array, possibly be nested, returns array of only one level
    flatten: function(array, single) {
      // how should we solve this?
      // simple = ["a", ["b"]];
      // => ["a", "b"]
      let results = [];
      for (let key in array) {
        let element = array[key];
        if (Array.isArray(element)) {
          // if the element is an array, add its elements to our results after flattening
          let flattened = element;
          if (!single) {
            flattened = fi.flatten(element);
          }
          for (let i in flattened) {
            results.push(flattened[i]);
          }
        } else {
          // if the element is just an element, add it to our results
          results.push(array[key]);
        }
      }
      console.log("flattened");
      console.log(array);
      console.log(results);
      return results;
    }
  };
})();

// flatten
// uniq

fi.libraryMethod();
