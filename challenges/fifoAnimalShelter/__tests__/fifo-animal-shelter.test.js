'use strict';

const AnimalShelter = require('../fifo-animal-shelter.js');

describe('`FifoAnimalShelter` class', () => {
  it('Can successfully instantiate an empty animal shelter`', () => {
    const shelter = new AnimalShelter();
    expect(shelter).toBeDefined();
  });

  describe('`addDogOrCat(animal)` method', () => {
    it('Can successfully `addDogOrCat` a single dog or cat onto a stack', () => {
      const shelter = new AnimalShelter();
      shelter.addDogOrCat('dog');
      expect(shelter.front.value).toBe('dog');
    });
    it('Can successfully `addDogOrCat` multiple animals onto a stack', () => {
      const shelter = new AnimalShelter();
      shelter.addDogOrCat('cat');
      shelter.addDogOrCat('dog');
      shelter.addDogOrCat('dog');
      expect(shelter.front.value).toBe('cat');
      expect(shelter.front.next.value).toBe('dog');
      expect(shelter.rear.value).toBe('dog');
    });
    it('Returns `null` if `addDogOrCat` is used on an animal other then a dog or cat', () => {
      const shelter = new AnimalShelter();
      const badValue = shelter.addDogOrCat('chicken');
      expect(badValue).toBeNull();
    });
  });
  describe('`adoptDogOrCat(pref)` method', () => {
    it('Can `adoptDogOrCat` from front of Queue & retun null if empty', () => {
      const shelter = new AnimalShelter();
      shelter.addDogOrCat('cat');
      shelter.adoptDogOrCat('cat');
      expect(shelter.front).toBeNull;
    });
    it('Can successfully `adoptDogOrCat` from anywhere in the Queue', () => {
      const shelter = new AnimalShelter();
      shelter.addDogOrCat('cat');
      shelter.addDogOrCat('dog');
      shelter.addDogOrCat('cat');
      let adopted = shelter.adoptDogOrCat('dog');
      expect(adopted).toBe('dog');
    });
    it('Returns `null` if the `pref` is not a `dog` or `cat`', () => {
      const shelter = new AnimalShelter();
      const badValue = shelter.adoptDogOrCat('octopus');
      expect(badValue).toBeNull();
    });
  });
});