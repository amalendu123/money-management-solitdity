// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;


contract moneymanagement{
    uint256 public money = 0;
    mapping(address => uint256) ownerToMoney;
    function creditMoney(uint256 num) external  {
        money = money + num;
        ownerToMoney[msg.sender] = money;
    }
    function debitMoney(uint num) external  {
        money = money - num;
        ownerToMoney[msg.sender] = money;
    }
    function getMoney() external view returns (uint256){
        return ownerToMoney[msg.sender];
    }
}