'use strict';

const { Node, BinaryTree, BinarySearchTree } = require('../binary-tree.js');

describe('`BinaryTree` class', () => {
  it('Can successfully instantiate an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree).toBeDefined();
  });
  it('Can successfully instantiate a tree with a single root node', () => {
    const a = new Node('a');
    const tree = new BinaryTree(a);
    expect(tree).toBeDefined();
  });
  describe('`preOrder` method', () => {
    it('Can successfully return a collection from a preorder traversal', () => {
      const tree = new BinaryTree();
      tree.add(1);
      tree.add(2);
      tree.add(3);
      tree.preOrder();
      expect(tree.root.value).toEqual(1);
    });
  });
  describe('`inOrder` method', () => {
    it('Can successfully return a collection from an inorder traversal', () => {
      const tree = new BinaryTree();
      tree.add('a');
      tree.add('b');
      tree.add('c');
      tree.inOrder();
      expect(tree.root.value).toEqual('a');
    });
  });
  describe('`postOrder` method', () => {
    it('Can successfully return a collection from a postorder traversal', () => {
      const tree = new BinaryTree('a');
      tree.add('b');
      tree.add('c');
      expect(tree.root.value).toEqual('a');
    });
  });
});

describe('`BinarySearchTree` class', () => {
  it('Can successfully instantiate an empty tree', () => {
    const tree = new BinarySearchTree();
    expect(tree).toBeDefined();
  });
  it('Can successfully instantiate a tree with a single root node', () => {
    const tree = new BinarySearchTree(1);
    console.log(tree.root);
    expect(tree).toBeDefined();
    expect(tree.root.value).toBe(1);
  });
  describe('`add` method', () => {
    it('Can successfully add a left child and right child to a single root node', () => {
      const tree = new BinarySearchTree(1);
      expect(tree.root.value).toBe(1);
      tree.add(2);
      expect(tree.root.right.value).toBe(2);
      tree.add(0);
      expect(tree.root.left.value).toBe(0);
    });
  });
  describe('`contains` method', () => {
    it('Returns `true` if a tree contains a `val`', () => {
      const tree = new BinarySearchTree(0);
      tree.add(1);
      tree.add(2);
      tree.add(3);
      expect(tree.contains(3)).toBeTruthy();
    });
    it('Returns `false` if a tree does not contain a val', () => {
      const tree = new BinarySearchTree(0);
      tree.add(1);
      tree.add(2);
      tree.add(3);
      expect(tree.contains(4)).toBeFalsy();
    });
  });
  describe('`breadthFirst` method', () => {
    it('Returns `null` if the tree is empty', () => {
      const tree = new BinaryTree();
      const result = tree.breadthFirst();
      expect(result).toBeNull();
    });
    it('Can successfully return a collection from a breadth-first order traversal', () => {
      const tree = new BinaryTree();
      const arr = [1, 2, 3, 4, 5, 6];
      arr.forEach(n => tree.add(n));
      const result = tree.breadthFirst();
      expect(result).toEqual(arr);
    });
  });
});