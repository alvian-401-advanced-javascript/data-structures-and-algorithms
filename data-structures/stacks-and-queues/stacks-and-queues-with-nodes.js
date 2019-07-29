'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {

  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    node.next = this.top;
    this.top = node;
    this.length++;
  }

  pop() {
    if (!this.length || this.length <= 0) { return 'nothing to pop'; }
    let popped;
    let temp = this.top;
    this.top = this.top.next;
    popped = temp.value;
    this.length--;
    return popped;
  }

  peek() {
    if (!this.length || this.length <= 0) { return 'nothing to peek'; }
    console.log(this.top.value);
    return this.top.value;
  }

}


class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(value) {
    let node = new Node(value);
    if (!this.rear) {
      this.front = this.rear = node;
      this.length++;
      return;
    }
    this.rear.next = node;
    this.rear = node;
    this.length++;
  }

  dequeue() {
    if (!this.length || this.length <= 0) { return 'Queue is already empty';}
    let temp = this.front;
    this.front = temp.next;
    this.length--;

    if(!this.front) { 
      this.rear = null;
      return temp.value;
    }
    
  }

  peek() {
    if (!this.length || this.length <= 0) { return 'nothing to peek'; }
    console.log('peeked', this.front.value);
    return this.front.value;
  }

}

module.exports = { Node, Stack, Queue };