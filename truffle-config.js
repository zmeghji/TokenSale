const path = require("path");
require('dotenv').config({path: './.env'});
const HDWalletProvider = require("@truffle/hdwallet-provider");
const MetaMaskAccountIndex = 0;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545,
      host: "127.0.0.1",
      network_id: 1337

    },
    ganache_local: {
      provider: () =>
        new HDWalletProvider(process.env.MNEMONIC, "http://127.0.0.1:8545/", MetaMaskAccountIndex ),
      network_id: 1337
    }
  },
  compilers: {
    solc: {
      version: "^0.8.0"
    }
  }
};
