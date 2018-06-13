var Queue = function() {
// Use an object with numeric keys to store values
  var storage = {};
  var someInstance = {};
  // Implement the methods below


  var currFirstIndex = 0;
  var currLastIndex = 0;

  someInstance.enqueue = function(value) {
    //store value by adding one to currentEnd (automatically updates currentEnd)
    storage[currLastIndex] = value;
    currLastIndex += 1;

    //call size.increment
    this.size.increment();
  };

  someInstance.dequeue = function() {
  //function to delete first node of collection
  var deleteKey = function() {
    delete storage[currFirstIndex];
    currFirstIndex += 1;


    deleteKey();
  };

  someInstance.size = function() {
    //instantiate initial size at creation as 0
    //function to increment size
    //function to decrement size

    //function to get current value

    //return size
  };

  return someInstance;
};


//somewhere a new queue is created
