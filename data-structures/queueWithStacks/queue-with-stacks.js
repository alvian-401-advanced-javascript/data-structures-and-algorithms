'use strict';

const { Stack } = require('../stacks-and-queues/stacks-and-queues.js');

class PseudoQueue {
  constructor() {
    this.stack = new Stack();
    this.tempStack = new Stack();
  }
  enqueue(val) {
    while (this.stack.top) {
      const current = this.stack.pop();
      this.tempStack.push(current);
    }
    this.stack.push(val);
    while (this.tempStack.top) {
      const current = this.tempStack.pop();
      this.stack.push(current);
    }
  }
  dequeue() {
    if (this.stack.top) {
      return this.stack.pop();
    }
    return null;
  }
}

module.exports = PseudoQueue;