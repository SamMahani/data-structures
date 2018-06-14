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
  //add input value to object at last index property
  //increment last index property
  //increment current size

//add dequeue method
  //if last index propety is greater than or equeal to first index property
    //temporarily save the value at first index in object
    //delete the value at first index in object
    //decrement current size
    //return temporarily saved value

//add size method
  //return current size





