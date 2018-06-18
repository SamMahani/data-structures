class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    //add storage property object
    this.storage = {};
    //add current size property 
    this.currSize = 0;
    //add current first index property 
    this.currFirstIndex = 0;
    //add current last index property
    this.currLastIndex = 0;
  }
  
  //add enqueue method with value input
  enqueue(value) {
    //add input value to storage at last index property
    this.storage[this.currLastIndex] = value;
    //increment last index property
    this.currLastIndex++;
    //increment current size
    this.currSize++;
  }
  
  //add dequeue method
  dequeue() {
    //if last index propety is greater than or equeal to first index property
    if (this.currSize > 0) {
      //temporarily save the value at first index in storage
      var tempValToReturn = this.storage[this.currFirstIndex];
      //delete the value at first index in storage
      delete this.storage[this.currFirstIndex];
      //increment first index property
      this.currFirstIndex++;
      //decrement current size property
      this.currSize--;
      //return temporarily saved value
      return tempValToReturn;
    }
  }
  
  //add size method
  size() {
    //return current size
    return this.currSize;
  }
}
