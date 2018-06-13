var Queue = function() {
  var someInstance = {};
  // Implement the methods below

  // Use an object with numeric keys to store values
  var storage = {};

  // variables to be used by methods below
  var currFirstIndex = 0;
  var currLastIndex = 0;
  var currSize = 0;

  someInstance.enqueue = function(value) {
    //store value by adding one to currentEnd 
    storage[currLastIndex] = value;
    //increment last index
    currLastIndex++;
    //increment size
    currSize++;
  };

  someInstance.dequeue = function() {
    //if a value exists in storage
    if ( currSize > 0 ) {
      //temporarily store the value
      var tempVal = storage[currFirstIndex];
      //delete first stored value
      delete storage[currFirstIndex];
      //move our first index by incrementing
      currFirstIndex++;
      //decrement size of container
      currSize--;
      //return temporarily stored value
      return tempVal;
    }
  };

  someInstance.size = function() {
    //return current size of container
    return currSize;
  };

  //return container
  return someInstance;
};
