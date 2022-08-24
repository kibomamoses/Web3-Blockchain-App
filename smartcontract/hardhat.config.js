require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/63HtbAj0__VA5FQUoQu_ocVvs4KFzvnn',
      accounts: ['59ce916c60a399786b78218559b35bc4ac07f45a3f80e2a629f7b7142c6521ce'],
    },
  },
};