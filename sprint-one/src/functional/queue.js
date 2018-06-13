var Queue = function() {
  // Use an object with numeric keys to store values
  var storage = {};

  var someInstance = {};
  // Implement the methods below

  // variables to be used by methods below
  var currFirstIndex = 0;
  var currLastIndex = 0;
  var currSize = 0;

  someInstance.enqueue = function(value) {
    //store value by adding one to currentEnd 
    storage[currLastIndex] = value;

    //increment last index
    currLastIndex += 1;

    //increment size
    currSize++;
  };

  someInstance.dequeue = function() {
    //delete first stored value
    if ( currSize > 0 ) {
      let tempVal = storage[currFirstIndex];
      delete storage[currFirstIndex];
      currFirstIndex += 1;
  
      //decrement size
      currSize--;
      return tempVal;
    }
  };

  someInstance.size = function() {
    return currSize;
  };
  return someInstance;
};
