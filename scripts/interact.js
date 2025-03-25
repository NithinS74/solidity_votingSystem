const hre = require("hardhat");

async function main() {
  const deployedAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
  const x = await hre.ethers.getContractAt(
    "voting",
    deployedAddress,
  );
  console.log("interacting with block");
  await x.vote(1);
  await x.vote(0);
  await x.vote(1);
  const str = await x.getWinner();
  await str;
  console.log(str);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
