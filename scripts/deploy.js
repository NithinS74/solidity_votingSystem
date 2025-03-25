const hre = require("hardhat");

async function main() {
  const x = await hre.ethers.getContractFactory("voting");
  const y = await x.deploy(["likith", "mohith", "prabhat"]);
  await y.deployed();
  console.log("deployed at:", y.address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
