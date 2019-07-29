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
    this.stack = [];
    this.length = 0;
  }

  push(node) {
    this.stack.push(node);
    this.top = node;
    this.length++;
  }

  pop() {
    let popped = this.stack.pop();
    this.top = this.stack[this.stack.length - 1];
    this.length--;
    return popped;
  }

  peek() {
    let node = this.stack[this.stack.length - 1];
    return node;
  }

}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.queue = [];
    this.length = 0;
  }

  enqueue(value) {
    this.queue.push(value);
    this.front = this.queue[0];
    this.length++;
  }

  dequeue() {
    let shifted = this.queue.shift();
    this.front = this.queue[0];
    this.length--;
    return shifted;
  }

  peek() {
    let value = this.queue[0];
    return value;
  }

}

module.exports = { Node, Stack, Queue };

