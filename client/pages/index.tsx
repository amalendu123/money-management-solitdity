import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#EEEEEE] text-[#222831] font-mono">
      <div className="border-6 border-[#31363F]  bg-[#76ABAE] sm:p-10 p-2">
        <div className=" flex-col space-y-10">
            <div className="flex justify-center items-center "><h2 className="text-3xl font-mono">Money Manager</h2></div>
            <div className="flex justify-center items-center "><h4 className="text-sm font-mono">Avail Balance: 100</h4></div>
            <form className="flex ">
              <label className="font-bold text-xl p-2">Amount:</label>
              <input type="text" placeholder="Enter the Amount" className="rounded-2xl p-2"/>
            </form>
            <div className="flex justify-between ">
              <button className="border-4 border-[#31363F] bg-[#31363F] p-2 text-white rounded-3xl">Credit</button>
              <button className="border-4 border-[#31363F] bg-[#31363F] p-2 text-white rounded-3xl">Debit</button>
            </div>
        </div>
      </div>

    </div>
  );
}
