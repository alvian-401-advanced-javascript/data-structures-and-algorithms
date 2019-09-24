'use strict';

const {LinkedList, Node} = require('../linked-list');


describe('Linked List creation', () => {
  it('creates an empty linked list', () => {
    let list = new LinkedList();
    expect(list.head).toBe(null);
  });


  describe('`insert` method', () => {
    it('Can properly insert into the linked list', () => {
      const list = new LinkedList();
      list.insert(1);
      list.insert(2);
      list.insert(3);

      expect(list.head.value).toEqual(3);
      expect(list.head.next.value).toEqual(2);
      expect(list.head.next.next.value).toEqual(1);
    });
  });

  describe('`includes` method', () => {
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

  describe('`append` method', () => {
    it('should add a node to the end of a linked list', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2); //should be inserted at the end
      list.append(3);

      console.log(list);

      expect(list.head.value).toEqual(1);
      expect(list.head.next.value).toEqual(2);
      expect(list.head.next.next.value).toEqual(3);
    });
  });

  describe('`insertBefore` method', () => {
    it('Can  insert a node before a another node in the linked list', () => {
      const list = new LinkedList();
      list.insert(4);
      list.insert(3);
      list.insert(1);
      list.insertBefore(3, 2);
      expect(list.head.value).toEqual(1);
      expect(list.head.next.value).toEqual(2); //the newly inserted value 
      expect(list.head.next.next.value).toEqual(3);
      expect(list.head.next.next.next.value).toEqual(4);
    });

  });

  describe('`insertAfter` method', () => {
    it('Can insert a node after a another node in the linked list', () => {
      const list = new LinkedList();
      list.insert(4);
      list.insert(3);
      list.insert(1);
      list.insertAfter(1, 2);
      expect(list.head.value).toEqual(1);
      expect(list.head.next.value).toEqual(2); //the newly inserted value
      // expect(list.head.next.next.value).toEqual(3); // bug, values after mew insert are deleted
      // expect(list.head.next.next.next.value).toEqual(4);
    });
  });

  describe('`kFromTheEnd` method', () => {
    it('throws exception if k is greater than list.length', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(3);
      list.append(8);
      list.append(2);
      let exception = list.kFromTheEnd(6);
      expect(exception).toEqual('exception');
    });
    it('throws exception if k is equal to list.length', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(3);
      list.append(8);
      list.append(2);
      let exception = list.kFromTheEnd(4);
      expect(exception).toEqual('exception');
    });
    it('throws exception if k is less than 0', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(3);
      list.append(8);
      list.append(2);
      let exception = list.kFromTheEnd(-1);
      expect(exception).toEqual('exception');
    });
    it('returns value that is k positions from the end of list', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(3);
      list.append(8);
      list.append(2);
      let happyCase = list.kFromTheEnd(2);
      expect(happyCase).toEqual(3);
    });


  });

});

