'use strict';

const insertionSort = arr => {
  for(let i = 1; i < arr.length; i++) { //i = number to be sorted, starts from 2nd index
    for(let j = 0; j < i; j++) { //j = number left of i to be compared
      if(arr[i] < arr[j]) { 
        let temp = arr.splice(i, 1);
        arr.splice(j, 0, temp[0])
        console.log('current state', arr)
        // if i is less than j, splice it out in a temp arr
        //splice it back in before
      }
    }
  }
  console.log('sorted arr', arr);
  return arr;
};

module.exports = insertionSort;