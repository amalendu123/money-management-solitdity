const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const TokenModule = buildModule("moneyModule", (m) => {
  const token = m.contract("moneymanagement",[]);

  return { token };
});

module.exports = TokenModule;