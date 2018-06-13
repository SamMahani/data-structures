var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
  };

  someInstance.pop = function() {
  };

  someInstance.size = function() {
  };

  return someInstance;
};


/*
Specification::IOCE
  Input: 
    any single value of any type
  Output: 
    .push will not return a value
    .pop will return popped value
    .size will return a numerical value
    side effects: values within Stack function will be modified
  Constraints:
    none
  Edge Cases:
    popping an empty stack should do nothing


Justification::what are you creating
  Stack is a collection. It's purpose is to hold values in a last in first out order - similar to a stack of plates.

Explanation::
  At input, a value will be stored in memory somewhere. The only outputs come from pop and size methods. When pop is called, it will only 
  return a value if something exists within the stack. Size will return either 0 or the size of the stack based on prior input.

Visualization::
  Done
  
Approximation::

Verification::

Implementation::
*/