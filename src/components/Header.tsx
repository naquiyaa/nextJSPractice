import "../app/globals.css";

import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white py-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <a href="/">
            <img
              src="/blog.png"
              alt="Logo"
              className="w-20 h-auto rounded-md"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
