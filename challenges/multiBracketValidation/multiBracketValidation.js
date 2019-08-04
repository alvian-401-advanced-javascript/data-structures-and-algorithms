'use strict';

const { Stack, Node } = require('../../data-structures/stacks-and-queues/stacks-and-queues-with-nodes.js');


const multiBracketValidation = (str) => {
  if (typeof str !== 'string') { return null; }

  const st = new Stack();
  const opener = /[([{]/g;
  const closer = /[)\]}]/g;

  const matchers = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

};

module.exports = multiBracketValidation;
