import '@nomiclabs/hardhat-waffle';

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: process.env.ROPSTEN_URL,
      accounts: [process.env.ROPSTEN_ACCOUNT]
    }
  }
}

// Contract Deployed to
// 0xca953466cE696f59787caCB1DC67ce38F4BDB3c7