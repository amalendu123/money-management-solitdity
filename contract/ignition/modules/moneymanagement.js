const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("moneymanagementModule", (m) => {
  const tokenContract = m.contract("moneymanagement");

  return { tokenContract };
});