import React from "react";
import "../App.css"

import { FaShippingFast } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { IoIosBulb } from "react-icons/io";



const Features = () => {
  return (
    <div id="features" className="move p-5 bg-gray-300 ">
     
        <h1 className="text-2xl font-bold pl-3 md:text-center">Features</h1>
        <div className="flex flex-col gap-3 p-2 md:flex md:flex-row md:justify-between">
          {/* Box-1 */}
          <div  className="block bg-[#030712] text-white p-5 rounded-xl md:w-[400px]">
            <span className="text-4xl text-gray-500">
              <FaShippingFast />
            </span>
            <p className="text-md text-blue-200 font-semibold">Fast Payments</p>
            <p className="text-sm text-gray-500 ">Your money, moving at your speed</p>
          </div>



          {/* Box-2 */}
          <div className="block bg-[#030712] text-white p-5 rounded-xl md:w-[400px]">
            <span  className="text-4xl text-gray-500">
              <MdAnalytics />
            </span>
            <p className="text-md text-blue-200 font-semibold">Expense Tracking</p>
            <p className="text-sm text-gray-500 ">Track your spending effortlessly and stay in control of your budget.</p>
          </div>


          {/* Box-3 */}
          <div className="block bg-[#030712] text-white p-5 rounded-xl md:w-[400px]">
            <span className="text-4xl text-gray-500">
              <IoIosBulb />
            </span>
            <p className="text-md text-blue-200 font-semibold">Secure Banking</p>
            <p className="text-sm text-gray-500 ">Bank with confidence using advanced encryption and fraud protection.</p>
        
          </div>
        </div>
     </div>
  );
};

export default Features;
