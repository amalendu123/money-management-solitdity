const moneymanagement = artifacts.require("moneymanagement.sol");

module.exports = function(deployer) {
    deployer.deploy(moneymanagement);
}