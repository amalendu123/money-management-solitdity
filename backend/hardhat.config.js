/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
const { vars } = require("hardhat/config");
module.exports = {

  gas: 2100000,
  gasPrice: 8000000000,
  solidity: {
    compilers: [
      {
        version: "0.8.20",
        settings: {
          optimizer: {
            enabled: true,
            runs: 77,
          },
        },
      },
      
    ],
  },
  networks: {
    sepolia: {
      allowUnlimitedContractSize: true,
      url: "https://eth-sepolia.g.alchemy.com/v2/hPoi5qcgeXQlci-QgM-KdCGxxylSvAE5",
      accounts: ['0x3b7a040ced672520cba1cbf37f356968792a35f8b8362a65283d6b16a899da8f'],
    },
    localhost: {
      allowUnlimitedContractSize: true,
      url: "http://2207.0.0.1:8545",
  },

  }
}
