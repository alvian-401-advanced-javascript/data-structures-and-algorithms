# Stacks and Queues DSA Implementation

### Author: Alvian Joseph

### Links and Resources
* [submission PR](https://github.com/alvian-401-advanced-javascript/data-structures-and-algorithms/pull/14)
* [![Build Status](https://www.travis-ci.com/alvian-401-advanced-javascript/data-structures-and-algorithms.svg?branch=master)](https://www.travis-ci.com/alvian-401-advanced-javascript/data-structures-and-algorithms)


### Challenge
 * Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.  
* Create a Stack class that has a top property. It creates an empty Stack when instantiated. This object should be aware of a default empty value assigned to top when the stack is created.  
 * Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.  
 * Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.  
 * Define a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.  
* Create a Queue class that has a front property. It creates an empty Queue when instantiated. This object should be aware of a default empty value assigned to front when the queue is created.  
* Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.  
 * Define a method called dequeue that does not take any argument, removes the node from the ftront of the queue, and returns the node’s value.  
* Define a method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.  

### Approach
Created class for each data type and defined each as
an empty array within their contructors. I then used
the correspondeing array methods for each function, modifying the
pointers as necessary.

#### Tests
  * `npm test`
