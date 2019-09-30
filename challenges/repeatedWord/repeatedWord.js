const Hashtable = require('../../hashtables/hashTable.js');

const repeatedWord = (str) => {

  const ht = new Hashtable(1024);
  const arr = str.toLowerCase().split(' ');

  for (let i = 0; i < arr.length; i++) {

    if (ht.contains(arr[i])) {
      return arr[i];
    }

    else {
      ht.add(arr[i]);
    }
  }
  return null;
};

module.exports = repeatedWord;