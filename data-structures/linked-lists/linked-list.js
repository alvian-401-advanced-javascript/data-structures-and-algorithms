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
    this.tail = null;

    this.length = 0;

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
    console.log(isInList);
    return isInList;
  }

  append(value) {
    if (!this.head && !this.tail) {
      this.head = new Node(value);
      this.tail = this.head;
    }
    else {
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
    }
    this.length++;

  }


  insertBefore(existingValue, newVal) {
    if (existingValue) {
      let newNode = new Node(newVal);

      let current = this.head;
      while (current !== null) {
        if (current.next.value === existingValue) {
          newNode.next = current.next;
          current.next = newNode;
          return;
        }
        else {
          current = current.next;
        }
      }
    }
  }


  insertAfter(existingValue, newVal) {
    if (existingValue) {
      let current = this.head;
      while (current !== null) {
        if (current.value === existingValue) {
          let newNode = new Node(newVal);
          current.next = newNode;
          return;
        }
        else {
          current = current.next;
        }
      }
    }
  }
  kFromTheEnd(k) {
    if (typeof k !== 'number' || k >= this.length || k < 0) {
      return 'exception';
    }
    if (k === 0) { return this.tail.value; }
    let current = this.head;
    let i = this.length - k - 1;
    while (i > 0) {

      current = current.next;
      i -= 1;
    }
    return current.value;
  }


} 

function mergeLists(listA, listB) {
  if(typeof listA !== 'object' || typeof listB !== 'object') {
    return 'invalid argument';
  }
  let currenta = listA.head;
  let currentb = listB.head;

  while(currenta.next && currentb.next) {
    currentb.next = currenta.next;
    currenta.next = currentb;
    currenta = currentb.next;
    currentb = currentb.head;
    
  }
  return currenta.head;
}

module.exports = {LinkedList, Node};