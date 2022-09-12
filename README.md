# crypto-exchange-wallets <!-- omit in toc -->

## Table of Contents <!-- omit in toc -->

- [Presentation](#presentation)
- [Installation](#installation)
- [Technical information](#technical-information)
  - [Stack](#stack)
  - [Code quality](#code-quality)
  - [Tests](#tests)
  - [Logging and debugging](#logging-and-debugging)
  - [Security](#security)
- [Requirements](#requirements)
  - [Production](#production)
  - [Development](#development)
- [Usage](#usage)
  - [Environment variables](#environment-variables)
  - [Import](#import)
    - [Deep require](#deep-require)
    - [Regular](#regular)
  - [Lib](#lib)
    - [ethereum](#ethereum)
      - [wallets](#wallets)
      - [walletsByExchange](#walletsbyexchange)
  - [Errors](#errors)
  - [Development](#development-1)
    - [Linting](#linting)
    - [Unit test](#unit-test)
    - [Build](#build)
      - [JS files and docs](#js-files-and-docs)
- [Known issues](#known-issues)
- [Code of Conduct](#code-of-conduct)
- [Contributing](#contributing)
- [Support](#support)
- [Security](#security-1)
- [License](#license)

## Presentation

List of Crypto centralized and decentralized exchange wallets by platform and exchange.

Current supported platforms:

- Ethereum

On the Ethereum platform exchange wallets have been found from:

- <https://etherscan.io/accounts/label/exchange>
- <https://etherscan.io/accounts/label/dex?subcatid=undefined&size=100&start=0&col=1&order=asc>
- <https://www.coincarp.com/currencies/ethereum/exchange-wallets/>

## Installation

`npm install --save crypto-exchange-wallets`

## Technical information

### Stack

- Language: JavaScript ES6/ES7
- Node.js >= Dubnium (10.22.1)

### Code quality

Code style follows [Airbnb JavaScript Best Practices](https://github.com/airbnb/javascript) using ESLint.

### Tests

Mocha and Chai for unit testing.

### Logging and debugging

None.

### Security

- [Code security](https://docs.npmjs.com/packages-and-modules/securing-your-code) and most precisely module dependencies can be audited running `npm audit`.

## Requirements

### Production

- See [Stack](#stack)

### Development

- See [Stack](#stack)

## Usage

### Environment variables

None.

### Import

#### Deep require

- `/ethereum`: **<Object\>**
- `/ethereum/wallets`: **<Array\>**
- `/ethereum/walletsByExchange`: **<Object\>**

Example:

```javascript
const ethereum = require('crypto-exchange-wallets/ethereum');
const ethereumExchangeWallets = require('crypto-exchange-wallets/ethereum/wallets');
const ethereumWalletsByExchange = require('crypto-exchange-wallets/ethereum/walletsByExchange');
```

#### Regular

```javascript
const cryptoExchangeWallets = require('crypto-exchange-wallets');

const {
  ethereum,
} = require('crypto-exchange-wallets');
```

### Lib

- `cryptoExchangeWallets` **<Object\>** with the following properties.

#### ethereum

- `ethereum` **<Object\>** with the following properties.

Example:

```javascript
const {
  ethereum: {
    wallets,
    walletsByExchange,
  },
} = require('crypto-exchange-wallets');
```

##### wallets

- `wallets` **<Array\>** list of all known Ethereum exchange wallets in lowercase.

Example:

```javascript
console.log(wallets);

// [
//   '0x11111254369792b2ca5d084ab5eea397ca8fa48b',
//   '0xe069cb01d06ba617bcdf789bf2ff0d5e5ca20c71',
//   '0xd47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5',
//   '0x111111125434b319222cdbf8c261674adb56f3ae',
//   ...,
// ]
```

##### walletsByExchange

- `walletsByExchange` **<Object\>** list of all known Ethereum exchange wallets by exchange key. See [the list of exchange keys](docs/ethereum-exchanges.md).
  - `{exchange-key}` **<Array\>** list of all known Ethereum wallets in lowercase for this exchange.

Example:

```javascript
console.log(walletsByExchange.binance);

// [
//     '0x3f5ce5fbfe3e9af3971dd833d26ba9b5c936f0be',
//     '0xd551234ae421e3bcba99a0da6d736074f22192ff',
//     '0x564286362092d8e7936f0549571a803b203aaced',
//     ...,
// ]
```

### Errors

None.

### Development

#### Linting

`npm run lint`

#### Unit test

`npm test`

#### Build

##### JS files and docs

`npm run build`

## Known issues

/

## Code of Conduct

This project has a [Code of Conduct](.github/CODE_OF_CONDUCT.md). By interacting with this repository, organization, or community you agree to abide by its terms.

## Contributing

Please take a moment to read our [Contributing Guidelines](.github/CONTRIBUTING.md) if you haven't done so yet.

It would be very helpful if we can add other platforms as Cardano, Solana, Avalanche, Polkadot, etc. so feel free to help us improve this package and keep it updated.

## Support

Please see our [Support](.github/SUPPORT.md) page if you have any questions or for any help needed.

## Security

For any security concerns or issues, please visit our [Security Policy](.github/SECURITY.md) page.

## License

[MIT](LICENSE.md).
