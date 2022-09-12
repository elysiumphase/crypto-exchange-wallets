const path = require('path');
const fs = require('fs');
const walletsByExchangeSrc = require('../src/ethereum/walletsByExchange');

const author = 'Elysium Phase <hi@elysiumphase.com> (https://github.com/elysiumphase)';
const distDir = path.join(__dirname, '../dist/');
const docsDir = path.join(__dirname, '../docs/');
const ethereumDistDir = path.join(distDir, 'ethereum');
const generated = `Generated: ${new Date().toISOString()}`;
const jsFileHead = `/**
* ${generated}
* ${author}
*/`;
const libName = 'Crypto Exchange Wallets';
const namingRule = 'Exchanges\' key as defined in `walletsByExchange.js` is formatted in kebab lower case except for `.` character which is kept as it is. For an example `Binance US` will become `binance-us` and `Gate.io` will be `gate.io` and NOT `gate-io`.';

// create and/or rm dist dir
try {
  fs.mkdirSync(distDir, { recursive: true });
  fs.rmdirSync(distDir, { recursive: true });
  fs.mkdirSync(ethereumDistDir, { recursive: true });
} catch (error) {
  console.error(`🔴 unable to clean and create build dir: ${error.message}`);
  process.exit(1);
}

/**
 * Lib index
 */
const indexJs = `/**
* ${libName}
* ${generated}
* ${author}
*/
const ethereum = require('./ethereum');

module.exports = Object.freeze({
  ethereum,
});

`;

fs.writeFileSync(path.join(distDir, 'index.js'), indexJs);
console.info('🟢 successfully built lib index.js file');

/**
 * Ethereum
 */

// walletsByExchange.js
const walletsByExchange = {};

Object.keys(walletsByExchangeSrc).forEach((exchange) => {
  walletsByExchange[exchange.replace(/\s/g, '-').toLowerCase()] = walletsByExchangeSrc[exchange]
    .map((wallet) => wallet.toLowerCase());
});

const walletsByExchangeJs = `${jsFileHead}
const walletsByExchange = ${JSON.stringify(walletsByExchange, null, 2)};

module.exports = Object.freeze(walletsByExchange);

`;

fs.writeFileSync(path.join(ethereumDistDir, 'walletsByExchange.js'), walletsByExchangeJs);

console.info('🟢 successfully built ethereum walletsByExchange.js file');

const walletsByExchangeKeys = Object.keys(walletsByExchange);

// wallets.js
const wallets = walletsByExchangeKeys
  .map((exchange) => walletsByExchange[exchange]).flat();

const walletsJs = `${jsFileHead}
const wallets = ${JSON.stringify(wallets, null, 2)};

module.exports = Object.freeze(wallets);

`;

fs.writeFileSync(path.join(ethereumDistDir, 'wallets.js'), walletsJs);

console.info('🟢 successfully built ethereum wallets.js file');

// index.js
const ethereumIndexJs = `const wallets = require('./wallets');
const walletsByExchange = require('./walletsByExchange');

module.exports = Object.freeze({
  wallets,
  walletsByExchange,
});

`;

fs.writeFileSync(path.join(ethereumDistDir, 'index.js'), ethereumIndexJs);

console.info('🟢 successfully built ethereum index.js file');

// ethereum-exchanges.md
let ethereumExchangesMd = `# Exchanges on the Ethereum platform

## Number of exchanges

${walletsByExchangeKeys.length}

## Key naming rule

${namingRule}

## List by key

`;

walletsByExchangeKeys.forEach((exchange) => {
  ethereumExchangesMd += `- ${exchange}\n`;
});

fs.writeFileSync(path.join(docsDir, 'ethereum-exchanges.md'), ethereumExchangesMd);

console.info('🟢 successfully built ethereum-exchanges.md file');

console.info('\n🟢 build successful');

process.exit(0);
