var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //initialize an instance 
  var collection = {};
  //initialize currIndex to -1
  collection.currIndex = -1;
  //initialize empty storage
  collection.storage = {};
  //extend stackMethods to instance
  _.extend(collection, stackMethods);
  //return instance of object
  return collection;
};

var stackMethods = {
  //initialize push
  push: function(value) {
    //increment currIndex
    this.currIndex++;
    //create key value pair using this currIndex and this value in storage
    this.storage[this.currIndex] = value;
  },

  //initialize pop 
  pop: function() {
    //if currIndex is greater than or equal to 0
    if (this.currIndex >= 0) {

      var tempIndex = this.currIndex;
      //save the value of currIndex at storage
      var tempVar = this.storage[this.currIndex];
      //delete the value of currIndex at storage
      delete this.storage[this.currIndex];
      //decrement currIndex
      this.currIndex--;
      //return the saved value
      return tempVar;
    }
  },

  //initialize size function
  size: function() {
    //return this currIndex + 1
    return this.currIndex + 1;
  },
};

/*
Specification::IOCE
  Input: 
    value

  Output: 
    for pop method: value
    side effects: internal values of storage and currIndex will change

  Constraints: 
    none
   
  Edge Cases: 
    none

Justification::what are you creating
  this function will add values to the top of a collection (object) and also have the capability to remove those very values from the top

Explanation::
  the input will always be a value with the push method which will return the function, and blank with the pop method which will return the popped value

Visualization::
  done

Approximation::
  done
 
Verification::

Implementation::
*/