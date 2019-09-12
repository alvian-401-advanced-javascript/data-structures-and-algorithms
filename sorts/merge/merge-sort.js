'use strict';

const mergeSort = arr => {
  const sortedArr = [...arr];
  if(sortedArr.length < 2) { return sortedArr };

  const length = sortedArr.length;
  const middle = Math.floor(length / 2);
  const left = sortedArr.slice(0, middle);
  const right = sortedArr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const results = [];
  while(left.length && right.length) {
    if(left[0] <= right[0]) {
      results.push(left.shift())
    }
    else {
      results.push(right.shift())
    }
  }
  return results.concat(left, right);
}

console.log(mergeSort([5, 32, 7, 9, 20, 21]))

module.exports = mergeSort;