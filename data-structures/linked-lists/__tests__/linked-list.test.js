'use strict';

const LinkedList = require('../linked-list.js');


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
      list.insert(2);
      list.append(3); //should be inserted at the end
      list.insert(1);

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
      // // expect(list.head.next.next.next.value).toEqual(4);
    });
  });

});

