var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 
  //initialize currIndex to -1
  this.currIndex = -1;
  //initialize empty storage
  this.storage = {};
};


//initialize push
Stack.prototype.push = function(value) {
  //increment currIndex
  this.currIndex++;
  //create key value pair using this currIndex and this value in storage
  this.storage[this.currIndex] = value;
};

//initialize pop 
Stack.prototype.pop = function() {
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
};

//initialize size function
Stack.prototype.size = function() {
  //return this currIndex + 1
  return this.currIndex + 1;
};
