'use strict';

const { Node, LinkedList } = require('../data-structures/linked-lists/linked-list.js');

class Hashtable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    // 1. Split key into an array of characters
    // 2. Add (or multiply) all the UTF-16 values together
    // 3. Multiply by a large prime number (like 599)
    // 4. Divide by the total size of the array

    if (typeof key !== 'string') key = key.toString();
    return key.split('').reduce((p, n) => {
      return p + n.charCodeAt(0);
    }, 0) * 599 % this.size;
  }

  add(key, value = key) {
    let hash = this.hash(key);

    // make a new bucket if there's no key = hash
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }

    // put the { key: value } into the bucket
    let entry = { [key]: value };
    this.map[hash].append(entry);
  }

  get(key) {
    let hash = this.hash(key);

    // if the bucket exists, return the value
    // else return null
    return this.map[hash] ?
      this.searchBucket(this.map[hash], key) :
      null;
  }

  contains(key) {
    let hash = this.hash(key);

    // return boolean if bucket exists
    return this.map[hash] && this.searchBucket(this.map[hash], key) ?
      true :
      false;
  }
  
  // traverse bucket (LL) and return value of a key
  searchBucket(bucket, key) {
    if (typeof key !== 'string') key = key.toString();
    let current = bucket.head;
    while (current) {
      if (Object.keys(current.value)[0] === key) {
        return Object.values(current.value)[0];
      } else {
        current = current.next;
      }
    }
    return null;
  }
}

let ht = new Hashtable(1024);

ht.add('alvian', 'joseph');
ht.add('aileen', 'murphy');
ht.add('jeremy', 'lee');
ht.add('lee', 'roy');
ht.add('john', 'cokos');
ht.add('adrienne', 'easton');
ht.add('jonny', 'graybill');
ht.add('adrianna', 'graybill');

ht.get('alvian');
ht.contains('john'); 

console.log('contains', ht.contains('john'))
console.log('get', ht.get('alvian'))

module.exports = Hashtable;