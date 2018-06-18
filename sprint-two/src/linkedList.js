var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //create node
    var newNode = Node(value);
    //if linked list is empty
    if(list.head === null && list.tail === null) {
      //assign new node to list head
      list.head = newNode;
      list.tail = newNode;
    }
    //if list.head and list.tail are equal and not null
    else if(list.head === list.tail && list.head !== null) {
     //point head node to new node
     list.head.next = newNode;
     //make sure the node that the tail is point to, points to node 2
     list.tail = newNode;
    }

    //third time addToTail is called
    else {
      //change what previous node points to
      list.tail.next = newNode;
      //chnge tail to point to node
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    //create variable to return
    var oldHead = list.head.value;
    //reassign head to next nod
    list.head = list.head.next;
    //return original list.head
    return oldHead;
  };

  list.contains = function(target) {
    //target is what we are comparing our value to
    //for loop
    for (var i = list.head; i !== null; i = i.next) {
      // if(target === list.head.next)
      if (target === i.value) {
        return true;
      }
    }
      return false;
  };
  
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?





















 */
