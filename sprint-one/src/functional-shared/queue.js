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
  this.storage[this.currLastIndex] = value;
  //increment last index property
  this.currLastIndex++;
  //increment current size
  this.currSize++;
};

//add dequeue method
queueMethods.dequeue = function() {
  //if last index propety is greater than or equeal to first index property
  if(this.currLastIndex >= this.currFirstIndex) {
    //temporarily save the value at first index in storage
    var tempValToReturn = this.storage[this.currFirstIndex];
    //delete the value at first index in storage
    delete this.storage[this.currFirstIndex];
    //increment first index property
    this.currFirstIndex++;
    //decrement current size property
    this.currSize++;
    //return temporarily saved value
    return tempValToReturn;
  }
};

//add size method
queueMethods.size = function() {
  //return current size
  return this.currSize;
};







