import React, { useState } from "react";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { FaRobot } from "react-icons/fa6";

const Chatbot = () => {
  const [showChat, setShowChat] = useState(false);

  const handleChat = () => {
    setShowChat((prev) => !prev); // toggle
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chatbot button */}
      <div
        onClick={handleChat}
        className="w-12 h-12 cursor-pointer bg-gray-500 flex items-center justify-center rounded-2xl shadow-lg hover:bg-gray-600 transition"
      >
        <span className="text-[#030712] text-3xl">
          <TbMessageChatbotFilled />
        </span>
      </div>

      {/* Chatbox */}
      {showChat && (
        <div className="w-[300px] h-[400px] bg-gray-400 rounded-2xl shadow-xl p-3 mt-3 flex flex-col">
          <div className="font-semibold text-gray-900 border-b pb-2 flex gap-2 text-center bg-gray-300 rounded-tl-md rounded-tr-md p-2">
            <span className="text-xl">
              <FaRobot />
            </span>
            Fireflow AI Assistant
          </div>
          <div className="flex-1 overflow-y-auto p-2 text-sm text-gray-800">
            <p>👋 Hi, how can I help you today?</p>
          </div>
          <div className="flex mt-2 gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 border rounded-l-md px-2 py-1 text-sm outline-none"
            />
            <button className="bg-[#030712] hover:bg-[#021341] text-white px-3 rounded-r-md text-sm">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
