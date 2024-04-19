const moneymanagement = artifacts.require('moneymanagement.sol');
contract('moneymanagement', () =>{
    it('should update money',async () =>{
        const money = await moneymanagement.new();
        await money.creditMoney(100);
        const data = await money.getMoney();
        assert.strictEqual(data.toString(), '100', 'Money was not updated correctly');

})
})