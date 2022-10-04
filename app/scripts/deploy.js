// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const {ethers} = require("hardhat")

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;


  const Lock = await hre.ethers.getContractFactory("Lock");
  const lock = await Lock.deploy("I NEED A LAPTOP", true, ethers.utils.parseEther("99"));
  const Lock2 = await hre.ethers.getContractFactory("Lock2");
  const lock2 = await Lock2.deploy("I NEED FOOD AMK", true, ethers.utils.parseEther("99"));

  await lock.deployed();
  await lock2.deployed();

  console.log(
    `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}, ${lock2.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
