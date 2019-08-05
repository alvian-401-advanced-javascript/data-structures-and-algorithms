'use strict';

const { Stack, Node } = require('../../data-structures/stacks-and-queues/stacks-and-queues-with-nodes.js');


const multiBracketValidation = (str) => {
  if (typeof str !== 'string') {
    console.log('invalid entry, must be string');
    return null;
  }
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {

    if (str.charAt(i) === '(' || str.charAt(i) === '{' || str.charAt(i) === '[') {
      stack.push(str.charAt(i));
    }

    if (str.charAt(i) === ')' || str.charAt(i) === '}' || str.charAt(i) === ']') {
      let opener = stack.pop();
      let joined = opener.concat(str.charAt(i));
      if (joined === '[]' || joined === '()' || joined === '{}') {
        continue;
      }
      else {
        console.log('not balanced');
        return false;
      }
    }
  }
  if (stack.length > 0) {
    console.log('not balanced');
    return false;
  }
  console.log('perfectly balanced');
  return true;
};

multiBracketValidation('[({})');

module.exports = multiBracketValidation;
