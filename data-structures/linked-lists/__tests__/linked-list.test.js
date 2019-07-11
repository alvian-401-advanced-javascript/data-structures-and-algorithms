'use strict';

const Node = require('../linked-list.js');
const LinkedList = require('../linked-list.js');


describe('`LinkedList` class', () => {
  describe('`LinkedList` class instantiation', () => {
    it('Can  instantiate an empty linked list', () => {
      const list = new LinkedList('Test');
      expect(list.value).toEqual('Test');
    });
  });
});

xdescribe('`insert` method', () => {
  it('Can properly insert into the linked list', () => {
    const list = new LinkedList();
    console.log(typeof list);
    list.insert('a');
    expect(list.value).toEqual('a');
  });
});

xdescribe('`includes` method', () => {
  it('returns true if the value is in the list', () => {
    const list = new LinkedList();
    list.insert('a');
    const isInList = list.includes('a');
    expect(isInList).toBeTruthy();
  });
  it('returns false if the value is not in the list', () => {
    const list = new LinkedList();
    list.insert('a');
    const isInList = list.includes('c');
    expect(isInList).toBeFalsy();
  });
});

xdescribe('`append` method', () => {
  it('Can add a node to the end of a linked list', () => {
    const list = new LinkedList();
    list.append('a');
    expect(list.head.value).toBe('a');
  });
});

xdescribe('`insertBefore` method', () => {
  it('Can  insert a node before a another node in the linked list', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('d');
    list.insertBefore('d', 'c');
    const before = list.head.next;
    const after = before.next;
    expect(after.value).toBe('c');
  });

});

xdescribe('`insertAfter` method', () => {
  it('Can insert a node after a another node in the linked list', () => {
    const list = new LinkedList();
    list.insert('c');
    list.insert('a');
    list.insertAfter('a', 'b');
    const head = list.head;
    expect(head.value).toBe('a');
    const next = head.next;
    expect(next.value).toBe('b');
  });
});

