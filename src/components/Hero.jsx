import React from "react";
import heroVideo from "../assets/hero-video.mp4";

const Hero = () => {
  return (
    <div className="bg-[#030712] text-white">
      {/* For video */}
      <div>
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-cover md:h-[450px]"
        ></video>
      </div>

      {/* for text content */}
      <div className="p-8 flex flex-col items-start gap-4 md:flex md:items-center md:gap-8">
        <p
          className="block text-2xl font-bold  bg-gradient-to-l from-red-500 via-indigo-500 to-teal-500 text-transparent bg-clip-text
md:text-4xl "
        >
          Smart, Secure, and Simple Digital Banking
        </p>
        <p className="move text-sm text-gray-500 ">
          Manage your money-track expenses, and grow your savings-all in one
          platform.
        </p>
        <button className="move border-1 p-2 text-sm text-gray-300 rounded-md hover:border-[#2c29fc] hover:shadow-sm shadow-blue-500/50">
          Open Account
        </button>
      </div>
    </div>
  );
};

export default Hero;
