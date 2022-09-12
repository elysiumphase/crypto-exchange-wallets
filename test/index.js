/**
 * index lib
 */
const { expect } = require('./Common');
const lib = require('../dist');

describe('#index', function() {
  it('should export an object', function() {
    expect(lib).to.be.an('object');
  });

  it('should export an object with ethereum property', function() {
    expect(lib).to.be.an('object').with.property('ethereum');
  });
});
