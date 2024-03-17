import dotenv from "dotenv";
dotenv.config();

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.21",
  networks: {

    bsctest: {
      url: process.env.BSC_URL,
      chainId: 97,
      accounts: {
        mnemonic: process.env.SECRET
      }
    },
    sepolia: {
      url: process.env.SEP_URL,
      chainId: 11155111,
      accounts: {
        mnemonic: process.env.SECRET
      }
    },

  },
  etherscan: {
    apiKey: process.env.API_KEY
  },
  sourcify: {
    enabled: true
   }
};

export default config;
