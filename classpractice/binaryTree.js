'use strict';

const Node = require('../data-structures/linked-lists/linked-list.js');
const { Stack, Queue } = require('../data-structures/stacks-and-queues/stacks-and-queues-with-nodes.js');


class BinaryTree {
  constructor(root=null) {
    this.root = root;
  }

  preOrder() {
    let results = [];

    let _walk = (node) => {
      results.push(node.value);
      if(node.left) { _walk(node.left) }
      
      if(node.right) { _walk(node.right) }
    };
    _walk(this.root);

    return results;
  }

  postOrder() {
    let results = [];

    let _walk = (node) => {
      if(node.left) { _walk(node.left) }

      if(node.right) { _walk(node.right) }

      results.push(node.value);

    };
    _walk(this.root);

    return results;
  }

 

  inOrder() {
    let results = [];

    let _walk = (node) => {
      if(node.left) { _walk(node.left) }

      results.push(node.value);

      if(node.right) { _walk(node.right) }
    };
    _walk(this.root);

    return results;
  }

  levelOrder() {
    
    let queue = new Queue();
    queue.enqueue(this.root);

    while(queue.length) {
      
    }
  }
}




let ten = new Node(10);

