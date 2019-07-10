'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value); 
    node.next = this.head; 
    this.head = node; 
  }

  includes(value) {
    let current = this.head;
    let isInList = false;
    while (current !== null) {
      if (current.value === value) {
        isInList = true;
      }
      current = current.next;
    }
    return isInList;
  }

  append(value) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value);
  }

  insertBefore(beforeVal, afterVal) {

    let current = this.head;

    let nodeAfter = new Node(afterVal);
    let nodeBefore = new Node(beforeVal);

    while (current.next !== null) { //this loop is causing a crash
      if (current.next.value === nodeAfter.value) {
        nodeBefore.next = nodeAfter;
        current.next = nodeBefore;
      }
    }
    current = current.next;
  }



  insertAfter(beforeVal, afterVal) {

    let current = this.head;

    let nodeAfter = new Node(afterVal);
    let nodeBefore = new Node(beforeVal);

    while (current.next !== null) { //this loop is causing a crash and I'm not sure why
      if (current.next.value === nodeBefore.value) {
        nodeAfter.next = nodeBefore;
        current.next = nodeAfter;
      }
    }
    current = current.next;
  }

}

let list = new LinkedList();
// list.insertBefore(2, 3); 

module.exports = LinkedList;
module.exports = Node;