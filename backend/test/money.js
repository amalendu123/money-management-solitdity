const { expect } = require("chai");

describe("money contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const hardhatToken = await ethers.deployContract("moneymanagement");
    await hardhatToken.creditMoney(100);
    const money  = await hardhatToken.getMoney();
    console.log(money.toString());
    
  });
});