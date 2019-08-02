const { Queue, Node } = require('../../data-structures/stacks-and-queues/stacks-and-queues-with-nodes.js');

class FifoAnimalShelter extends Queue {
  constructor() {
    super();
  }

  addDogOrCat(animal) {
    animal = animal.toLowerCase();
    if (animal !== 'dog' && animal !== 'cat') { return null; }
    else { this.enqueue(animal); }
  }

  adoptDogOrCat(pref) {
    pref = pref.toLowerCase();
    let node = new Node(pref);
    let current = this.front;

    if (node.value !== 'dog' && node.value !== 'cat' || !this.length) { return null; }

    while (current.next) {
      if (node.value === this.front.value) {
        console.log(`you adopted a ${node.value}`);
        return this.dequeue();
      }
      else if (node.value !== this.front.value && node.value === current.next.value) {
        this.front = current.next;
        console.log(`congrats, you adopted a ${current.next.value}!`);
        return this.dequeue();
      }
    }

  }
  
}

let shelter = new FifoAnimalShelter();
shelter.addDogOrCat('cat');
shelter.addDogOrCat('dog');
shelter.addDogOrCat('cat');
shelter.addDogOrCat('cat');
shelter.addDogOrCat('cat');
shelter.addDogOrCat('afds');
shelter.addDogOrCat('fdas');

let adopted = shelter.adoptDogOrCat('cat');
console.log(adopted);


module.exports = FifoAnimalShelter;