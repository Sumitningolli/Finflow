import React from "react";
import "../App.css"

const Footer = () => {
  return (
    <footer className="move bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-bold mb-4">FinFlow</h2>
          <p className="text-sm">
            Smart, secure, and simple digital banking for everyone.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#benefits" className="hover:text-white">Benefits</a></li>
            
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">🌐</a>
            <a href="#" className="hover:text-white">🐦</a>
            <a href="#" className="hover:text-white">📷</a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} FinFlow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
