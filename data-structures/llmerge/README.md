# Data Structures and Algorithms

### Author: Alvian Joseph

### Links and Resources
* [submission PR](https://github.com/alvian-401-advanced-javascript/data-structures-and-algorithms/pull/4)
* [![Build Status](https://www.travis-ci.com/alvian-401-advanced-javascript/data-structures-and-algorithms.svg?branch=master)](https://www.travis-ci.com/alvian-401-advanced-javascript/data-structures-and-algorithms)

## Table of Contents

#### [Code Challenges](https://github.com/alvian-401-advanced-javascript/data-structures-and-algorithms/tree/master/challenges)
#### [Data Structures](https://github.com/alvian-401-advanced-javascript/data-structures-and-algorithms/tree/master/data-structures)  

#### DSA Implementation
   * Create a Node class that has properties for the value stored and a pointer to the next node.
   * adds `includes()` method that checks if a `value` is included in a list and returns a boolean
   * adds `insert()` method that can add a new node with given data  
   
   
#### ll-insertions
  * adds `append()` method that takes in a value and adds it to the end of the list  
  * adds `insertBefore()` method that inserts a new value before an existing value in a list
  * adds `insertAfter()` method that inserts a new value after an existing value in a list

  

#### ll_kth_from_end
   * adds method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list.


#### ll-merge
   * adds function called `mergeLists()` which takes two linked lists as arguments, zips the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list
   
   notes:
   typecheck (must be object?)
   set current to head for both lists
   if there is no currenta, return currentb, vice versa
   iterate while current.next is true for both
   b.head = b.next
   b.next = a.next
   a.next = currentb
   currenta = currentb.next
   currentb = b.head
   if currentb = currenta.next = currentb
   return a.head

#### Running the app
* node

#### whiteboard
![ll-merge-wb]()
  
#### Tests
* How do you run tests?
  * `npm test`
  * `npm run lint`