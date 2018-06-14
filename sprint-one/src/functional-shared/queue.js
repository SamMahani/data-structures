var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //create instance object
  var instance = {};
  //add storage property object
  instance.storage = {};
  //add current size property 
  instance.currSize = 0;
  //add current first index property 
  instance.currFirstIndex = 0;
  //add current last index property
  instance.currLastIndex = 0;
  //add methods via extend
  _.extend(instance, queueMethods);
  //return instance
  return instance;
};

var queueMethods = {};
//add enqueue method with value input
queueMethods.enqueue = function(value) {
  //add input value to storage at last index property
  
  //increment last index property
  //increment current size
};

//add dequeue method
queueMethods.dequeue = function() {
  //if last index propety is greater than or equeal to first index property
    //temporarily save the value at first index in storage
    //delete the value at first index in storage
    //decrement current size
    //return temporarily saved value
};

//add size method
queueMethods.size = function() {
  //return current size
  return this.currSize;
};







