'use strict';

// const Node = require('../linked-lists/linked-list.js');
const { Stack, Queue } = require('../stacks-and-queues/stacks-and-queues-with-nodes.js');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = null;
    if (value) {
      this.root = new Node(value);
    }
  }

  findMaxVal() {
    if (this.root === null) {
      return null;
    }
    let currNode = this.root;

    while (currNode.right !== null) {
      currNode = currNode.right;
    }
    console.log(currNode.value);
    return currNode.value;
  }

  breadthFirst() {
    // const q = new Queue();
    let current = this.root;
    let values = [];
    const sortedValues = [];
    if (!current) { return null;}
    values.push(current);
    while (values.length) {
      let temp = values.shift();
      sortedValues.push(temp.value);
      if (temp.left) { values.push(temp.left); }
      if (temp.right) { values.push(temp.right); }
    }
    console.log(sortedValues);
    return sortedValues;
  }

  insert(value) { //AJ: credit  JavaScript Data Structures and Algorithms by Sammie Bae
    let node = new Node(value);
    if (!this.root) {
      //if there is no root value yet
      this.root = node;
    } else {
      //loop traverse until
      let currentRoot = this.root;
      while (currentRoot) {
        if (currentRoot.value > value) {
          //let's increment if it's not a null and insert if it is a null
          if (currentRoot.left != null) {
            currentRoot = currentRoot.left;
          } else {
            currentRoot.left = node;
            break;
          }
        } else if (currentRoot.value < value) {
          //if bigger than current, put it on the right
          //let's increment if it's not a null and insert if it is a null
          if (currentRoot.right != null) {
            currentRoot = currentRoot.right;
          } else {
            currentRoot.right = node;
            break;
          }
        } else {
          //case that both are the same
          break;
        }
      }
    }
  }


  preOrder() {
    let results = new Queue();

    let _walk = (node) => {
      console.log(node.value);
      results.enqueue(node.value);
      if (node.left) { _walk(node.left); }

      if (node.right) { _walk(node.right); }
    };
    _walk(this.root);

    console.log(results);
    return results;
  }

  postOrder() {
    let results = new Queue();

    let _walk = (node) => {
      if (node.left) { _walk(node.left); }

      if (node.right) { _walk(node.right); }

      results.enqueue(node.value);

    };
    _walk(this.root);

    console.log(results);
    return results;
  }

  inOrder() {
    let results = new Queue();
    
    let _walk = (node) => {
      if (node.left) { _walk(node.left); }

      results.enqueue(node.value);

      if (node.right) { _walk(node.right); }
    };
    _walk(this.root);

    console.log(results);
    return results;
  }

}

class BinarySearchTree {

  constructor(value) {
    this.root = null;
    if (value) {
      this.root = new Node(value);
    }
  }

  add(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
    }
    if (this.root.value < value) {
      this.root.right = new Node(value);
    } else {
      this.root.left = new Node(value);
    }
  }

  contains(value, current = this.root) {
    if (current === null || value === undefined) {
      return false;
    }
    if (current.value === value) {
      return true;
    } else if (current.value > value) {
      return this.contains(value, current.left);
    } else {
      return this.contains(value, current.right);
    }
  }
}

let tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);


tree.preOrder();



module.exports = { BinaryTree, BinarySearchTree, Node, Queue };