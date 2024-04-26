


import { ethers } from "ethers";
import { useEffect, useState } from "react";

export default function Home() {
  const [wallet, setWallet] = useState(false);
  const [currentAccount, setCurrentAccount] = useState();
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState();

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const contractABI = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "num",
          "type": "uint256"
        }
      ],
      "name": "creditMoney",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "num",
          "type": "uint256"
        }
      ],
      "name": "debitMoney",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMoney",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "money",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
 

  async function connectWallet() {
    const { ethereum } = window;
    if (!ethereum) {
      console.log("Metamask does not exist");
      return;
    }
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    setCurrentAccount(accounts[0]);
    setWallet(true);
    console.log(accounts[0]);
  }

  async function creditMoney() {
  if (amount === "") {
    console.log("Please enter an amount to credit.");
    return;
  }

  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    
    const contractCode = await provider.getCode(contractAddress);
    console.log("Contract code at address:", contractCode);
    try {
     
      const totalAmount = await contract.getMoney();
      console.log("Current total amount:", totalAmount.toString());
    } catch (error) {
      console.error("Error getting total amount:", error);
      return;
    }

    const tx = await contract.creditMoney(amount);
    await tx.wait();
    console.log("Money credited successfully!");
  } catch (error) {
    console.error("Error crediting money:", error);
  }
}

  useEffect(() => {
    async function getTotalAmount() {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
          const contract = new ethers.Contract(contractAddress, contractABI, provider);
          const totalAmount = await contract.getMoney();
          console.log(totalAmount);
          setTotal(totalAmount);
      } catch (error) {
          console.error("Error fetching total amount:", error);
      }
  }
    if (wallet) {
      getTotalAmount();
    }
  }, [wallet]);
  return (
    <>
      {wallet ? (
        <div className="h-screen w-screen flex justify-center items-center bg-[#EEEEEE] text-[#222831] font-mono">
          <div className="border-6 border-[#31363F] bg-[#76ABAE] sm:p-10 p-2">
            <div className=" flex-col space-y-10">
              <div className="flex justify-center items-center ">
                <h2 className="text-3xl font-mono">Money Manager</h2>
              </div>
              <div className="flex justify-center items-center ">
                <h4 className="text-sm font-mono">Avail Balance: {total || 'Loading...'}</h4>
              </div>
              <form className="flex ">
                <label className="font-bold text-xl p-2">Amount:</label>
                <input
                  type="text"
                  placeholder="Enter the Amount"
                  className="rounded-2xl p-2"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </form>
              <div className="flex justify-between ">
                <button
                  className="border-4 border-[#31363F] bg-[#31363F] p-2 text-white rounded-3xl"
                  onClick={creditMoney}
                >
                  Credit
                </button>
                <button className="border-4 border-[#31363F] bg-[#31363F] p-2 text-white rounded-3xl">
                  Debit
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen w-screen flex justify-center items-center p-4">
          <button
            className="border-4 border-[#31363F] bg-[#31363F] p-2 text-white rounded-3xl"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        </div>
      )}
    </>
  );
} 