fi = (function() {
  return {
    libraryMethod: function() {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function(collection, func) {
      for (let key in collection) {
        func(collection[key]);
      }
      return collection;
    },

    map: function(collection, func) {
      let mapped = [];
      for (let key in collection) {
        mapped.push(func(collection[key]));
      }
      return mapped;
    },

    reduce: function(collection, func, accumulator = 0) {
      for (let key in collection) {
        accumulator = func(accumulator, collection[key], collection);
      }
      return accumulator;
    },

    find: function(collection, func) {
      for (let key in collection) {
        if (func(collection[key])) {
          return true;
        }
      }
      return false;
    },

    filter: function(collection, func) {
      let filtered = [];
      for (let key in collection) {
        if (func(collection[key])) {
          filtered.push(collection[key]);
        }
      }
      return filtered;
    },

    size: function(collection) {
      let count = 0;
      for (let key in collection) {
        count++;
      }
      return count;
    },

    first: function(collection, n = 1) {}
  };
})();

fi.libraryMethod();
