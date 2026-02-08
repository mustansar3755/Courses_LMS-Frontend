import React from "react";
import { assets } from "../../assets/assets";


const Companies = () => {
  return (
    <div className=" flex flex-col gap-10 items-center">
      <p className="mt-12 text-sm text-gray-500">Trusted by learners from</p>

      {/* Logos (text-based placeholder) */}
      <div className="mt-4 flex flex-wrap justify-center items-center gap-24 text-gray-400 font-semibold">
        <img src={assets.MicroSoft} alt="" />
        <img src={assets.Adobe_Logo} alt="" />
        <img src={assets.Walmart_Logo} alt="" />
        <img src={assets.PayPal_Logo} alt="" />
      </div>
    </div>
  );
};

export default Companies;
