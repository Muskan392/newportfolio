import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 text-gray-300 py-6 mt-12 border-t border-gray-800 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm">
        <p className="mb-1">
          Made with <span className="text-pink-400 text-base">♥</span> by{" "}
          <span className="font-semibold text-purple-300">Muskan Keshri</span>
        </p>
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Muskan's Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
