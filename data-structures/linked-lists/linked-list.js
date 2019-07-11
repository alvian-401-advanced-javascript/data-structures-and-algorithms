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
    console.log(isInList);
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
    // if (typeof k !== 'number' || k >= this.length || k < 0) {
    //   throw 'Exception';
    // }
    // if (k === 0) { return this.tail.value; }
    let current = this.head;
    let i = this.length - k - 1;
    while (i > 0) {
      current = current.next;
      i -= 1;
    }
    return current.value;
  }
}

let list = new LinkedList();


module.exports = LinkedList;
