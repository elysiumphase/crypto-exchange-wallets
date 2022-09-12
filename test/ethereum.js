/**
 * ethereum
 */
const { expect } = require('./Common');
const { ethereum } = require('../dist');

describe('#ethereum', function() {
  it('should export an object', function() {
    expect(ethereum).to.be.an('object');
  });

  it('should export an object with the wallets property', function() {
    expect(ethereum).to.be.an('object').with.property('wallets');
    expect(ethereum.wallets).to.be.an('array');
  });

  it('should export an object with the walletsByExchange property', function() {
    expect(ethereum).to.be.an('object').with.property('walletsByExchange');
    expect(ethereum.walletsByExchange).to.be.an('object');
    expect(ethereum.walletsByExchange.binance).to.be.an('array');
  });
});
