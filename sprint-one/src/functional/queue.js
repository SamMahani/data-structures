var Queue = function() {
// Use an object with numeric keys to store values
  var storage = {};



  var someInstance = {};


// Implement the methods below

  //enqueue: insert value into back of collection
  someInstance.enqueue = function(value) {
    //function to set last node of collection
      //
      //

    //function to keep track of previous last node's key number

    //call size.increment

  };

  //dequed: first item in collection is deleted
  someInstance.dequeue = function() {
    //function to delete first node of collection
      //
      //
    //function to keep track of previous first node's key number
    
    //call size.decrement
  };

  someInstance.size = function() {
    //instantiate initial size at creation as 0
    //function to increment size
    //function to decrement size

    //function to get current value
  };

  return someInstance;
};


//somewhere a new queue is created
