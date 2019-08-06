'use strict';

const BinarySearchTree = require('../../../data-structures/trees/binary-tree.js').BinarySearchTree;
const fizzBuzzTree = require('../fizzBuzz.js');

xdescribe('Fizz Buzz Function', () => {
  it('values divisible by 3 or 5 change', () => {
    let tree = new BinarySearchTree();
    tree.add(30);
    tree.add(15);
    tree.add(10);
    tree.add(3);
    tree.add(38);
    tree.add(33);

    let fizzBuzz = fizzBuzzTree(tree.root);

    expect(fizzBuzz.value).toBe('FizzBuzz');             // 30
    expect(fizzBuzz.left.value).toBe('FizzBuzz');        // 15
    expect(fizzBuzz.left.left.value).toBe('Buzz');       // 10
    expect(fizzBuzz.left.left.left.value).toBe('Fizz');  // 3
    expect(fizzBuzz.right.value).toBe(38);               // 38
    expect(fizzBuzz.right.left.value).toBe('Fizz');      // 33
  });
});