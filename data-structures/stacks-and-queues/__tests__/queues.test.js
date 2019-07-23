'use strict';

const { Stack, Queue } = require('../stacks-and-queues.js');

describe('queues methods', () => {
  it('can successfully enqueue into a queue', () => {
    let testQ = new Queue;
    testQ.enqueue(1);
    testQ.enqueue(2);
    expect(testQ.front).toEqual(1);
  });

  it('can succesfully enqueue() multiple nodes onto queue', () => {
    let testQ = new Queue;
    testQ.enqueue(1);
    testQ.enqueue(2);
    testQ.enqueue(3);
    expect(testQ.length).toEqual(3);
  });

  it('can succesfully dequeue() off a queue', () => {
    let testQ = new Queue;
    testQ.enqueue(1);
    testQ.enqueue(2);
    testQ.enqueue(3);
    testQ.dequeue();
    expect(testQ.length).toEqual(2);
  });

  it('can empty a queue after multople dequeue()s', () => {
    let testQ = new Queue;
    testQ.enqueue(1);
    testQ.enqueue(2);
    testQ.enqueue(3);
    testQ.dequeue();
    testQ.dequeue();
    testQ.dequeue();
    expect(testQ.length).toEqual(0);
    expect(testQ.back).toBe(null);
  });

  it('can instaniate an empty queue', () => {
    let testQ = new Queue;
    expect(testQ.length).toEqual(0);
    expect(testQ.front).toBe(null);
  });

  it('can peek into a queue', () => {
    let testQ = new Queue;
    testQ.enqueue(1);
    testQ.enqueue(2);
    let peek = testQ.peek();
    expect(peek).toEqual(1);
  });

});
