import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <Link to="/" className="flex items-center py-4 px-2">
              <span className="font-semibold text-gray-500 text-lg">ResumeBuilder</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">
              Home
            </Link>
            <Link to="/builder" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">
              Builder
            </Link>
            <Link to="/templates" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">
              Templates
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;