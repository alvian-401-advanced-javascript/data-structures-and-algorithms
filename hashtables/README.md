# Hashtables

## Challenge
Implement a Hashtable with the following methods:
1. `hash`: takes in an arbitrary key and returns an index in the collection.
```
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
  ```
2. `add`: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
```
add(key, value) {
    let hash = this.hash(key);
    if (!this.map[hash]) this.map[hash] = new LinkedList();
    let entry = { [key]: value };
    this.map[hash].append(entry);
  }
  ```
3. `get`: takes in the key and returns the value from the table.
```
  get(key) {
    let hash = this.hash(key);
    return this.map[hash] ?
      this.searchBucket(this.map[hash], key) :
      null;
  }
```
4. `contains`: takes in the key and returns a boolean, indicating if the key exists in the table already.
```
 contains(key) {
    let hash = this.hash(key);

    // return boolean if bucket exists
    return this.map[hash] && this.searchBucket(this.map[hash], key) ?
      true :
      false;
  }
  ```
