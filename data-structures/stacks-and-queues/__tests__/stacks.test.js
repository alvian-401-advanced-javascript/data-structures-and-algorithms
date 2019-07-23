'use strict';

const { Stack, Queue } = require('../stacks-and-queues.js');

describe(' stacks', () => {
  it('can succesfully push() a single node to top of stack', () => {
    let testStack = new Stack;
    testStack.push(1);
    testStack.push(2);
    expect(testStack.top).toEqual(2);
  });

  it('can succesfully push() multiple nodes onto stack', () => {
    let testStack = new Stack;
    testStack.push(1);
    testStack.push(2);
    testStack.push(3);
    expect(testStack.length).toEqual(3);
  });

  it('can succesfully pop() off a stack', () => {
    let testStack = new Stack;
    testStack.push(1);
    testStack.push(2);
    testStack.push(3);
    testStack.pop();
    expect(testStack.length).toEqual(2);
    expect(testStack.top).toEqual(2);

  });

  it('can empty a stack after multople pop()s', () => {
    let testStack = new Stack;
    testStack.push(1);
    testStack.push(2);
    testStack.push(3);
    testStack.pop();
    testStack.pop();
    testStack.pop();
    expect(testStack.length).toEqual(0);
    expect(testStack.bottom).toBe(null);
  });

  it('can instaniate an empty stack', () => {
    let testStack = new Stack;
    console.log('stack', testStack);
    expect(testStack.length).toEqual(0);
    expect(testStack.bottom).toBe(null);
  });

  it('can peek into a stack', () => {
    let testStack = new Stack;
    testStack.push(1);
    testStack.push(2);
    let peek = testStack.peek();
    expect(peek).toEqual(2);
  });

});