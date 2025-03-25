const { ethers } = require("hardhat");
describe("testing the voting system", function () {
  let y;
  beforeEach(async function () {
    const x = await hre.ethers.getContractFactory("voting");
    y = await x.deploy(["likith", "mohith", "prabhat"]);
    await y.deployed();
  });
  it("should allow to cast votes", async function () {
    await y.vote(1);
    await y.vote(0);
    await y.vote(1);
  });
  it("should allow to get winner", async function () {
    await y.vote(1);
    await y.vote(1);
    await y.getWinner();
  });
});
