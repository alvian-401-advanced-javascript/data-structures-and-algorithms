'use strict';

const leftJoinObj = (objA, objB) => {
  let output = [];
  for (let word in objA) {
    let synonym = objA[word],
      antonym = objB.hasOwnProperty(word) ? objB[word] : null;
    output.push([word, synonym, antonym]);
  }
  return output;
};

const leftJoinMap = (hMapA, hMapB) => {
  let output = [];
  for (let [word, synonym] of hMapA) {
    let antonym = hMapB.has(word) ? hMapB.get(word) : null;
    output.push([word, synonym, antonym]);
  }
  return output;
};



module.exports = {leftJoinMap, leftJoinObj};