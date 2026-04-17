import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <div className="text-xl font-bold">
        <Link to="/">Logo</Link>
      </div>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/services" className="hover:text-gray-300">Services</Link>
        <Link to="/gallery" className="hover:text-gray-300">Gallery</Link>
      </div>
    </nav>
  );
};

export default Navbar;
