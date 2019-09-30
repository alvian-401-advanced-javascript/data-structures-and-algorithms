'use strict';

const Hashtable = require('../../hashtables/hashTable.js');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const treeIntersection = (tree1, tree2) => {

  let output = [];
  const ht = new Hashtable(1024);

  (function add(node) {
    if (node.left) add(node.left);
    ht.add(node.value);
    if (node.right) add(node.right);
  })(tree1);

  (function check(node) {
    if (node.left) check(node.left);
    if (ht.contains(node.value)) output.push(node.value);
    if (node.right) check(node.right);
  })(tree2);

  return output;
};


module.exports = { treeIntersection, Node };