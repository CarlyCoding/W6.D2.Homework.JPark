const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

    let park;

  beforeEach(function () {
    park = new Park('Jurrasic Park', 50)
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurrasic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 50);
  });

  it('should have a collection of dinosaurs', function () {
     const actual = park.dinosaurs;
     assert.strictEqual(actual.length, 0);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addToDinosaurs(new Dinosaur('Hateasaurus Rex', 'Enemies', 100))
    const actual = park.dinosaurs;
    assert.strictEqual(actual.length, 1);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeFromDinosaurs();
    const actual = park.dinosaurs;
    assert.strictEqual(actual.length, 0);
  });
      // Will return to complete- ran out of time to finish. 

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
