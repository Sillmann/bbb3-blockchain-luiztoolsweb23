import { ethers } from "hardhat";

async function main() {

  const webbb3 = await ethers.deployContract("Webbb3");

  await webbb3.waitForDeployment();

  const address = await webbb3.getAddress();

  console.log(`Deploy finished at ${address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});