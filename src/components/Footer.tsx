import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-4 mt-auto">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-gray-950">
          &copy; {new Date().getFullYear()} Naquiya's Website
        </p>
      </div>
    </footer>
  );
};

export default Footer;
