import React from "react";
import "../App.css";

const Testimonials = () => {
  return (
    <section className="move bg-[#030712] text-gray-300 py-12 ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          <div className="block bg-gray-300 p-6 rounded-lg shadow-md">
            <p className="text-[#030712] mb-4 font-semibold">
              "This service changed the way I bank. Super fast and secure!"
            </p>
            <h4 className="font-semibold text-[#030712] text-xl">Sarah Johnson</h4>
            <span className="text-sm text-gray-900">CEO, TechCorp</span>
          </div>

          <div className="block bg-gray-300 p-6 rounded-lg shadow-md">
            <p className="text-[#030712] mb-4 font-semibold">
              "I love the 0% transaction fee. Saved me so much money!"
            </p>
            <h4 className="font-semibold text-[#030712] text-xl">Michael Smith</h4>
            <span className="text-sm text-gray-900">Freelancer</span>
          </div>

          <div className="block bg-gray-300 p-6 rounded-lg shadow-md">
            <p className="text-[#030712] mb-4 font-semibold">
              "The customer support is available 24/7 and super helpful."
            </p>
            <h4 className="font-semibold text-[#030712] text-xl">Aisha Khan</h4>
            <span className="text-sm text-gray-900">Small Business Owner</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
