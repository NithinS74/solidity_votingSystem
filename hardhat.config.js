require("@nomiclabs/hardhat-ethers");
module.exports = {
  solidity: "0.8.28",
  network: {
    localhost: {
      url: "https://127.0.0.1:8545",
    },
  },
};

task("interact", "interacts with the contract").addParam(
  "address",
  "the deployement address",
).addParam("name", "name of the contract").setAction(
  async (takeArgs) => {
    const x = await hre.ethers.getContractAt(
      takeArgs.name,
      takeArgs.address,
    );
    console.log("deployed at:", x.address);
  },
);
