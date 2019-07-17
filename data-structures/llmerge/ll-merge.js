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


let list1 = new LinkedList();
console.log(list1);
list1.append(4);
list1.append(5);
list1.head = list.head.next;

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
console.log(list);
module.exports = LinkedList;
