import React from "react";

const LowPrices = () => {
  return (
    <div className="h-[820px] grid grid-cols-2">
      <div className="flex items-center  bg-[#171D28]">
        <div className="pl-[63px] max-w-[500px] text-white">
            <p className="text-blue-400">SALE UP TO 35% OFF</p>
          <h1 className="text-7xl">HUNDREDS of 
          New lower prices!</h1>
          <p className="mt-2 mb-5">
          Hurry up!!! Winter is coming!
          </p>
          <button className="px-14 py-3 bg-blue-500 rounded-md hover:opacity-70">
            Shopping Now
          </button>
        </div>
      </div>
      <div className="bg-hero bg-no-repeat bg-cover"></div>
    </div>
  );
};

export default LowPrices;
